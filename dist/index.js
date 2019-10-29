"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Koa = require("koa");
exports.app = new Koa();
var logger = require("koa-logger");
var koabody = require("koa-body");
var passport = require("koa-passport");
var session = require("koa-session");
var mongoose = require("mongoose");
var path = require("path");
var serve = require("koa-static");
var user_1 = require("./routes/user");
var task_1 = require("./routes/task");
mongoose.connect("mongodb://localhost/todo").then();
var port = process.env.PORT || 5000;
exports.app.use(koabody({ multipart: true }));
require("./configs/passport");
exports.app.keys = ['Todo keys ']; // todo change keys
exports.app.use(session({}, exports.app));
exports.app.proxy = true;
exports.app.use(passport.initialize());
exports.app.use(passport.session());
exports.app.use(logger());
exports.app.use(user_1.userRouter.routes());
exports.app.use(task_1.taskRouter.routes());
if (process.env.NODE_ENV === "production") {
    exports.app.use(serve(path.join(process.cwd(), "..", 'web', 'build')));
    console.log(path.join(process.cwd(), 'web', 'build'));
    console.log("Started in production");
}
exports.app.listen(port, function () {
    console.log("TODO  server @ " + port);
});
//# sourceMappingURL=index.js.map