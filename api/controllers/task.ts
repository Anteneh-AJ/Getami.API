import {Task} from "../models/task";
import {add, find, get, remove, update} from "../services/crud";
import {ParameterizedContext} from "koa";
import * as Router from "koa-router";

type Context = ParameterizedContext<any, Router.IRouterParamContext<{}>>;

export async function addTask(ctx: Context) {
    ctx.request.body.userId = ctx.state.user._id;
    return ctx.body = await add(Task, ctx.request.body);
}

export async function getTask(ctx: Context) {
    return ctx.body = await get(Task, ctx.params._id);
}

export async function getTasks(ctx: Context) {
    return ctx.body = await find(Task, {"userId": ctx.state.user._id});
}

export async function removeTask(ctx:Context) {
    return ctx.body = await remove(Task,ctx.params._id);
}

export async function editTask(ctx:Context) {
    return ctx.body= await update(Task, ctx.params._id, ctx.request.body);
}