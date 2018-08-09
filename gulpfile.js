var gulp = require("gulp");
var protractor = require("gulp-protractor").protractor;

/*var protractorQA = require("gulp-protractor-qa").protractor;

gulp.task('protractor-qa', function () {
    protractorQA.init({
        testSrc: 'tests/*.js',
    });
});*/

gulp.src(["./tests/*.js"])
    .pipe(protractor({
        configFile: "protractor.config.js",
        args: ['--baseUrl', 'http://127.0.0.1:8000']
    }))
    .on('error', function (e) { throw e })

gulp.task('default', ['protractor-qa']);
