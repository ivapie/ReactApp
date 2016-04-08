import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import jshint from 'gulp-jshint';

let jsFiles = ['client/*.js', 'client/**/*js'];

gulp.task('default', ['transpile']);

gulp.task('transpile', () => {
    return browserify('client/app.js')
        .transform('babelify')
        .bundle()
        .pipe( source('bundle.js') )
        .pipe( gulp.dest('dist'))
});

gulp.task('styles', () => {
    return gulp.src(jsFiles)
        .pipe( jshint() )
        .pipe( jshint.reporter('jshint-stylish', {
            verbose: true
        }));
});
