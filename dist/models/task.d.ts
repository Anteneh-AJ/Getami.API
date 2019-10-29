import * as mongoose from "mongoose";
import { Document, Schema } from 'mongoose';
export interface ITask extends Document {
    _id: Schema.Types.ObjectId;
    task: string;
    description: string;
    deadline: Date;
    userId: Schema.Types.ObjectId;
}
declare const Task: mongoose.Model<mongoose.Document, {}>;
export { Task };
//# sourceMappingURL=task.d.ts.map