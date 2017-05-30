import fs from 'fs';
import gulp from 'gulp';
import copy from 'gulp-copy';

gulp.task('update', function() {
    if (!fs.existsSync('./node_modules/jest-aliasify-resolver')) {
        fs.mkdirSync('./node_modules/jest-aliasify-resolver');
    }

    const sourceFiles = ['index.js', 'package.json'];

    return gulp.src(sourceFiles)
        .pipe(copy('./node_modules/jest-aliasify-resolver'));
});

gulp.task('js', function() {
    return browserify(`app`, { debug: true })
        .transform('babelify', { presets: ["es2015", "react"] })
        .transform('aliasify', {
            "aliases": {
                "simple": "./custompath/simple-text.js"
            }
        })
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./build/js'));
});