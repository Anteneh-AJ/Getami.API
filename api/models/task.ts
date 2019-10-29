import * as mongoose from "mongoose";
import { Document, Schema } from 'mongoose';

export interface ITask extends Document {
    _id: Schema.Types.ObjectId
    task: string
    description: string
    deadline: Date
    userId:Schema.Types.ObjectId
}

const TaskSchema = new Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    task: { type: String, required: true, index: true },
    description: { type: String, required: true, unique: true, index: true },
    deadline: { type: Date, required: true },
    userId:{type:Schema.Types.ObjectId,ref:"User"}
});

TaskSchema.index({ task: 'text',completed: 'boolean' });

const Task = mongoose.model("Task", TaskSchema);
export { Task }
