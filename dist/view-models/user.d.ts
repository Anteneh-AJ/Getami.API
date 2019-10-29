import { IUser } from "../models/user";
import { Schema } from "mongoose";
export interface IUserResponse {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
}
export declare function toUserResponse(user: IUser): IUserResponse;
//# sourceMappingURL=user.d.ts.map