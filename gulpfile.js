var gulp = require ('gulp');
var sass = require ('gulp-sass');

gulp.task('sass', gulp.series( function() {
    return gulp.src(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'])
    .pipe(sass()) // Converter Sass
    .pipe(gulp.dest('src/css'));
}));

// Verifica se algo foi alterado
gulp.task('watch', gulp.series( function() {
    gulp.watch(['node_modules/bootstrap/scss/*.scss', 'src/scss/*.scss'], gulp.parallel(['sass']))
}));

// Execuçao automatica
gulp.task('default', gulp.series( ['sass', 'watch'] ));
