//var noteCtrl = require('../controllers/note.controller');

module.exports = function(app){

    app.get('/', function (req, res) {
        res.render('index',{
            user : req.user
        });
    });




    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });


    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });
};
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.redirect('/');
}