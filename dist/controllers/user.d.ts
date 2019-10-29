/// <reference types="koa-body" />
/// <reference types="koa-passport" />
/// <reference types="koa-session" />
import { Schema } from "mongoose";
import { ParameterizedContext } from "koa";
import * as Router from "koa-router";
declare type Context = ParameterizedContext<any, Router.IRouterParamContext<{}>>;
export declare function addUser(ctx: Context): Promise<import("../view-models/user").IUserResponse>;
export declare function editProfile(body: any, _id: Schema.Types.ObjectId): Promise<void>;
export declare function getUser(ctx: Context): Promise<((context: ParameterizedContext<Router.IRouterParamContext<any, {}>, import("koa").DefaultContext>) => void) | import("../view-models/user").IUserResponse>;
export declare function getUsers(ctx: Context): Promise<import("../view-models/user").IUserResponse[]>;
export declare function getMyAccount(ctx: Context): Promise<import("../view-models/user").IUserResponse>;
export {};
//# sourceMappingURL=user.d.ts.map