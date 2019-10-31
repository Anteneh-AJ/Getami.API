import { User } from "../models/user/User";
import { IUser } from "../models/user/IUser";
import { Schema } from "mongoose";
import { add, update, get, list, find } from "../services/crud";
import { hash } from "bcrypt";
// import {IUserResponse, toResponse} from "../view-models/user";
import { ParameterizedContext } from "koa";
import * as Router from "koa-router";
import { NotFound } from "../services/context";
import { toUserResponse } from "../view-models/user";

type Context = ParameterizedContext<any, Router.IRouterParamContext<{}>>;

export async function addUser(ctx: Context) {
    const body = await ctx.request.body;
    const user = await find(User, { email: body.email });
    body.password = await hash(ctx.request.body.password, 12);

    if (user.length > 0) {
        ctx.status = 409;
        ctx.body = { status: 409, errmsg: "Duplicate email found" };
    }
    return ctx.body = toUserResponse(await add(User, body) as IUser);
}

export async function editProfile(
    body: any,
    _id: Schema.Types.ObjectId
) {
    await update(User, _id, body.account);
}

export async function getUser(ctx: Context) {
    const user = await get(User, ctx.params._id);
    if (user != null) return ctx.body = await toUserResponse(user as IUser);

    return NotFound();
}

export async function getUsers(ctx: Context) {
    const users = await list(User);
    return ctx.body = users.map(user => toUserResponse((user as IUser)));
}

export async function getMyAccount(ctx: Context) {
    return ctx.body = toUserResponse(await get(User, ctx.state.user._id) as IUser);
}