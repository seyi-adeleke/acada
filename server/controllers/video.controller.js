var Video = require('../models/videos');
var Users = require('../models/users');

exports.list = function(req, res) {
    Video.find().sort({ createdOn: 'desc'}).limit(12).exec(function(err, videos){
        Users.find({},function(err,users){
            res.render('videos',{notes: videos, user : req.user, users:users})
        })
    })

};
exports.getVideo = function (req, res) {
    res.render('newvideo', {user : req.user, firstName:req.body.firstName});
};

exports.createVideo = function(req, res) {
    var entry = new Video({
        member: req.user.firstName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });
    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the video. ' + err;
            console.log(err);
            res.render('newvideos', { user : req.user, firstName:req.body.firstName, message: req.flash(errMsg) });
        }
        else {
            console.log('Video was not saved!');
            res.redirect('/videos');
        }
    });

};

