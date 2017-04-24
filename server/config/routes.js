var videoCtrl = require('../controllers/video.controller');

module.exports = function(app,passport){

    app.get('/', function (req, res) {
        res.render('index',{
            user : req.user
        });
    });

    app.get('/newvideo', isLoggedIn, function(req, res){
        return videoCtrl.getVideo(req, res);
    });

    app.post('/newvideo', function(req,res){
        return videoCtrl.createVideo(req,res);
    });

    app.get('/videos', function(req, res){
        return videoCtrl.list(req, res);
    });
    app.get('/videos/:id',function(req,res){
        return  videoCtrl.getVideoByID(req,res);
    });


    app.get('/login', function(req, res) {
        // render the page and pass in any flash data if it exists
        res.render('login', { message: req.flash('loginMessage'), user : req.user });
    });

    app.post('/login', passport.authenticate('local-login', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/login', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    app.get('/signup', function(req, res) {
        res.render('signup',{ message: req.flash('signupMessage'), user : req.user  });
    });

    app.post('/signup', passport.authenticate('local-signup',{
            successRedirect:'/',
            failureRedirect:'/signup',
            failureFlash: true
        }
    ));

    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


  // user management

    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });


    app.get('/signup', function(req, res) {
        res.render('signup',{ message: req.flash('signupMessage'), user : req.user  });
    });
};
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}