import * as Koa from "koa"
export const app = new Koa();
import * as logger from "koa-logger";
import * as  koabody from "koa-body";
import * as passport from "koa-passport"
import * as session from "koa-session"
import * as mongoose from "mongoose"
import * as path from "path";
import serve = require("koa-static");
import { userRouter } from "./routes/user";
import { taskRouter } from "./routes/task";

mongoose.connect("mongodb://localhost/todo").then();

const port = process.env.PORT || 5000;
app.use(koabody({ multipart: true }));
require("./configs/passport");


app.keys = ['Todo keys ']; // todo change keys
app.use(session({}, app));
app.proxy = true;

app.use(passport.initialize());
app.use(passport.session());

app.use(logger());
app.use(userRouter.routes());
app.use(taskRouter.routes());

if (process.env.NODE_ENV === "production") {
    app.use(serve(path.join(process.cwd(), "..", 'web', 'build')));
    console.log(path.join(process.cwd(), 'web', 'build'));
    console.log("Started in production")
}

app.listen(port, function () {
    console.log("TODO  server @ " + port);
});