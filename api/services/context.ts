import {ParameterizedContext} from "koa";
import * as Router from "koa-router";

export function NotFound(){
    return (context:ParameterizedContext<Router.IRouterParamContext>) => {
        context.status=401;
    }
}
