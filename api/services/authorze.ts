import {Middleware} from "koa";

export function authorize():Middleware{
    return async (ctx,next)=>{
        if(ctx.state.user)
            return next();
        else
            return ctx.status=401;
    }
}
