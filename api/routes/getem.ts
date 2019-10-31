import * as Router from "koa-router";
import { addGetem, editGetem, getGetem, getGetems, removeGetem } from "../controllers/getem";
import { authorize } from "../services/authorze";

export const getemRouter = new Router({ prefix: "/api/task" });

getemRouter.post("/add", authorize(), async ctx => await addGetem(ctx));

getemRouter.put("/:_id", authorize(), async ctx => await editGetem(ctx));

getemRouter.get("/all", authorize(), async ctx => await getGetems(ctx));

getemRouter.get("/:_id", authorize(), async ctx => await getGetem(ctx));

getemRouter.delete("/:_id", authorize(), async ctx => await removeGetem(ctx));