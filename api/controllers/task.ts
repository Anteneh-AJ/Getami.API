import { Getem } from "../models/getem/Getem";
import { add, find, get, remove, update } from "../services/crud";
import { ParameterizedContext } from "koa";
import * as Router from "koa-router";

type Context = ParameterizedContext<any, Router.IRouterParamContext<{}>>;

export async function addGetem(ctx: Context) {
    ctx.request.body.userId = ctx.state.user._id;
    return ctx.body = await add(Getem, ctx.request.body);
}

export async function getGetem(ctx: Context) {
    return ctx.body = await get(Getem, ctx.params._id);
}

export async function getGetems(ctx: Context) {
    return ctx.body = await find(Getem, { "userId": ctx.state.user._id });
}

export async function removeGetem(ctx: Context) {
    return ctx.body = await remove(Getem, ctx.params._id);
}

export async function editGetem(ctx: Context) {
    return ctx.body = await update(Getem, ctx.params._id, ctx.request.body);
}