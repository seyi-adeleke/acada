var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var inject = require('gulp-inject');

gulp.task('inject', function() {
    var injectSrc = gulp.src(['./public/css/*.css',
        './public/js/*.js'], {
        read: false
    });

    var options = {
        bowerJson: require('./bower.json'),
        directory: './public/vendor'
    };

    return gulp.src('./src/views/*.ejs')
            .pipe(wiredep(options))
            .pipe(inject(injectSrc))
            .pipe(gulp.dest('./src/views'));
});



