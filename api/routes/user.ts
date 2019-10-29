import * as passport from "koa-passport";
import {addUser, editProfile, getMyAccount, getUser, getUsers} from "../controllers/user";
import * as Router from "koa-router";
import {authorize} from "../services/authorze";

export const userRouter = new Router({prefix: "/api/user"});

userRouter.post(
    "/login",
    passport.authenticate("local", {
        successRedirect: "/",
        failureRedirect: "/login"
    })
);
userRouter.post("/logout", authorize(), async ctx => {
        ctx.body = "Hello World";
    
});

userRouter.post("/logout", authorize(), async ctx => {
    if (ctx.isAuthenticated) {

        ctx.logout();
        ctx.body = {loggedOut: true};
    }
});

userRouter.get("/me", authorize(),async ctx => await getMyAccount(ctx));

userRouter.get("/all", async ctx => await getUsers(ctx));

userRouter.get("/:_id", authorize(), async ctx => await getUser(ctx));

userRouter.post("/register", async ctx => await addUser(ctx));

userRouter.put("/:_id",authorize(), async ctx => {
    ctx.body = await editProfile(ctx.request.body, ctx.params._id);
});
