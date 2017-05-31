import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('js', function() {
    return browserify('./app', { debug: true })
        .transform('babelify', { presets: ["es2015", "react"] })
        .transform('aliasify')
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/js'));
});