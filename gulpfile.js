const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCss = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const sourcemap = require("gulp-sourcemaps");

const path = "./desafio-04";
const srcCSSPath = path + "/src/sass/**/*.scss";
const dirCSSPath = path + "/dir/css";

function minCss() {
  return src(srcCSSPath)
    .pipe(sourcemap.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleanCss())
    .pipe(sourcemap.write())
    .pipe(dest(dirCSSPath));
}

function watcher() {
  watch(srcCSSPath, minCss);
}

exports.default = series(minCss, watcher);
