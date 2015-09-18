"use strict";

var gulp = require("gulp");

var sass = require("gulp-sass"),
    rename = require("gulp-rename");



// CSS
gulp.task("sass", function() {
    return gulp.src("src/*.scss")
        .pipe(sass())
        .pipe(rename("style.built.css"))
        .pipe(gulp.dest("public/built"));
});

gulp.task("scss", ["sass"]);
gulp.task("css", ["sass"]);



// Defaults
gulp.task("watch", ["default"], function() {
    gulp.watch("src/*.scss", ["sass"]);
});

gulp.task("default", ["sass"]);
