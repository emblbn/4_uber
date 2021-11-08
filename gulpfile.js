
let project_folder = "dist";
let source_folder = "src";

let path= {
    build: {
        html: project_folder + "src/",
        css: project_folder + "src/css/",
        js: project_folder + "src/js/", 
        img: project_folder + "src/img/",
        fonts: project_folder + "src/fonts/",
    },
    src: {
        html: source_folder + "src/",
        css: source_folder + "src/scss/style.scss",
        js: source_folder + "src/js/script.js", 
        img: source_folder + "src/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "src/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/src/**/*.html",
        css: source_folder + "/src/scss/**/*.scss",
        js: source_folder + "/src/js/**/*.js", 
        img: source_folder + "/src/img/**/*.{jpg,png,svg,gif,ico,webp}",
    },
    clean: "./" + project_folder + "/"
}

let { src, dest} = require('gulp'),
    gulp = require('gulp'),
    browsersync = require("browser-sync").create();

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}
let watch = gulp.parallel(browserSync);

exports.watch = watch;
exports.defaulp = watch;