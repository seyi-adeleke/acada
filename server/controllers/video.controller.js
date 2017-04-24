var Video = require('../models/videos');
var Users = require('../models/users');

exports.list = function(req, res) {
    Video.find().sort({ createdOn: 'desc'}).limit(12).exec(function(err, videos){
        console.log(videos);
        Users.find({},function(err,users){
            res.render('videos',{videos: videos, user : req.user, users:users})
        })
    })

};

exports.getVideoByID = function(req, res) {
    Video.findOne({_id:req.params.id}).exec(function(err,video){
        Users.find({},function(err,users){
            res.render('video',{video: video, user : req.user, users:users})
        });
    });

};



exports.getVideo = function (req, res) {


    res.render('newvideo', {user : req.user, firstName:req.body.firstName});
};

exports.createVideo = function(req, res) {
    var entry = new Video({
        member: req.user.firstName,
        title: req.body.title,
        link: req.body.link,
        tags: req.body.tags
    });
    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the video. ' + err;
            console.log(err);
            res.render('newvideo', { user : req.user, firstName:req.body.firstName, message: req.flash(errMsg) });
        }
        else {
            console.log('Video was saved!');
            res.redirect('/videos');
        }
    });

};

