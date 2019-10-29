import * as Router from "koa-router";
import {addTask, editTask, getTask, getTasks, removeTask} from "../controllers/task";
import {authorize} from "../services/authorze";

export const taskRouter = new Router({prefix: "/api/task"});

taskRouter.post("/add", authorize(), async ctx => await addTask(ctx));

taskRouter.put("/:_id", authorize(), async ctx => await editTask(ctx));

taskRouter.get("/all", authorize(), async ctx => await getTasks(ctx));

taskRouter.get("/:_id", authorize(), async ctx => await getTask(ctx));

taskRouter.delete("/:_id", authorize(), async ctx => await removeTask(ctx));