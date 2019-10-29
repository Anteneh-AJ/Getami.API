/// <reference types="mongoose" />
import { ParameterizedContext } from "koa";
import * as Router from "koa-router";
declare type Context = ParameterizedContext<any, Router.IRouterParamContext<{}>>;
export declare function addTask(ctx: Context): Promise<import("mongoose").Document>;
export declare function getTask(ctx: Context): Promise<import("mongoose").Document>;
export declare function getTasks(ctx: Context): Promise<any>;
export declare function removeTask(ctx: Context): Promise<void>;
export declare function editTask(ctx: Context): Promise<import("mongoose").Document>;
export {};
//# sourceMappingURL=task.d.ts.map