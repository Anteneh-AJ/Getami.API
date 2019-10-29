import * as mongoose from "mongoose";
import { Document, Schema } from 'mongoose';
export interface IUser extends Document {
    _id: Schema.Types.ObjectId;
    name: string;
    email: string;
    password: string;
}
declare const User: mongoose.Model<mongoose.Document, {}>;
export { User };
//# sourceMappingURL=user.d.ts.map