const gulp = require("gulp");
const connect = require("gulp-connect");

const sass = require("gulp-sass");//gulp-sass 浏览器本身不支持sass的语法 把sass转成css

const concat = require("gulp-concat");//gulp-concat 合并 减少请求次数

const uglify = require("gulp-uglify");//gulp-uglify 压缩 减小文件大小

const rename = require("gulp-rename");//重新命名

const cleanCss = require("gulp-clean-css");//压缩css

const babel = require("gulp-babel");//高版本转低版本

const sourcemaps = require("gulp-sourcemaps");//引入一个sourcemaps插件
//任务
gulp.task("hello", done => {

    console.log("hello gulp");

    done();
});
gulp.task("hello1", done => {

    console.log("hello1 gulp");

    done();
});

//默认任务
//gulp.task("default", gulp.series("hello", "hello1"));
//gulp.task("default", gulp.parallel("hello", "hello1"));

//拷贝单个文件
gulp.task("copyHtml", done => {
    gulp.src("*.html").pipe(gulp.dest("dist")).pipe(connect.reload());
    done();
});
gulp.task("copyHtml1", done => {
    gulp.src("html/*.html").pipe(gulp.dest("dist/html")).pipe(connect.reload());
    done();
});
gulp.task("copyCss", done => {
    gulp.src("css/*.css").pipe(gulp.dest("dist/css")).pipe(connect.reload());
    done();
});
gulp.task("copyImg", done => {
    gulp.src("img/**").pipe(gulp.dest("dist/img")).pipe(connect.reload());
    done();
});
gulp.task("copyJs", done => {
    gulp.src("js/*.js").pipe(gulp.dest("dist/js")).pipe(connect.reload());
    done();
});
gulp.task("copyFont", done => {
    gulp.src("font/font_2184870_qcojeaj48o/**").pipe(gulp.dest("dist/font/font_2184870_qcojeaj48o")).pipe(connect.reload());
    done();
});
//拷贝同种类型的文件
/* gulp.task("copyImg", done => {

    gulp.src("img/*.jpg").pipe(gulp.dest("dist/img"));

    done();

}) */

//拷贝不种类型的文件
/* gulp.task("copyImg", done => {

    gulp.src("img/*.{jpg,png}").pipe(gulp.dest("dist/img"));

    done();

}) */

//拷贝所有的
//拷贝同种类型的文件
/* gulp.task("copyImg", done => {

    gulp.src("img/**").pipe(gulp.dest("dist/img"));

    done();

}) */
//将不同目录里的文件拷贝到同一目录下
/* gulp.task("copy", done => {

    gulp.src(["json/a.json", "xml/a.xml"]).pipe(gulp.dest("dist/data"));

    done();
}) */


//sass任务
gulp.task("sass", done => {

    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload());

    done();
});


//build
gulp.task("build", gulp.parallel("copyHtml","copyHtml1","copyCss","copyJs","copyImg","copyFont","sass"));

//监听
gulp.task("watch", done => {

    gulp.watch('{*.html,html/*.html,css/*.css,img/**,js/*.js,font/font_2184870_qcojeaj48o/**,sass/*.scss}', gulp.series("copyHtml","copyHtml1","copyCss","copyJs","copyImg","copyFont","sass"));

    done();
})

//搭建服务器
gulp.task("server", done => {
    connect.server({
        root: "dist",
        livereload: true
    })
    done();
});

gulp.task("default", gulp.series("server", "watch"));


//合并
gulp.task("concat", done => {

    gulp.src(["js/a.js", "js/b.js"])
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/js"))

    done();
});
//直接压缩 合并之后再压缩
gulp.task("uglify1", done => {

    gulp.src("js/jquery-1.11.0.js")
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"));

    done();
});
gulp.task("uglify2", done => {

    gulp.src(["js/a.js", "js/b.js"])
        .pipe(concat("main.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js"))

    done();
});
//保留压缩前后的两个文件 重新命名
/* gulp.task("rename", done => {

    gulp.src(["js/a.js", "js/b.js"])
        .pipe(concat("main.js"))
        .pipe(gulp.dest("dist/js"))
        .pipe(uglify())
        .pipe(rename("main.min.js"))
        .pipe(gulp.dest("dist/js"))

    done();
}); */

//同时压缩多个文件，得到多个不同的文件名
gulp.task("rename", done => {

    gulp.src(["js/a.js", "js/b.js"])
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest("dist/js"))

    done();
});
//压缩css
gulp.task("cleancss", done => {

    gulp.src("css/login.css")
        .pipe(cleanCss())
        .pipe(gulp.dest("dist/css"));

    done();
});

//babel
gulp.task("babel", done => {

    gulp.src('js/es6.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('dist'))


    done();
})