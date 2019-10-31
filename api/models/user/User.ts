import * as mongoose from "mongoose";
import { Document, Schema } from 'mongoose';


const UserSchema = new Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    lastUpdate: { type: Date, required: false },
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
});

UserSchema.index({ name: 'text', email: 'text' });

const User = mongoose.model("User", UserSchema);
export { User }
