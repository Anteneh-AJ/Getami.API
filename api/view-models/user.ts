import { Schema } from "mongoose";
import { IUser } from "../models/user/IUser";

export interface IUserResponse {
    _id: Schema.Types.ObjectId
    name: string
    email: string
}
export function toUserResponse(user: IUser) {
    const resp: IUserResponse = {
        _id: user._id,
        name: user.name,
        email: user.email
    };
    return resp;
}