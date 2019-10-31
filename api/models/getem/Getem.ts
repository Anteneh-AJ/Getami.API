import * as mongoose from "mongoose";
import { Document, Schema } from 'mongoose';

const enums = {
    visibility:{
        PRIVATE : "PRIVATE",
        PUBLIC :"PUBLIC"
    }
};
type VISIBILITY = keyof typeof enums.visibility 

const GetemSchema = new Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    title: { type: String, required: true, unique: true, index: true },
    getem: { type: String, required: true, index: true },
    likes: { type: Date, required: true },
    visibility:{type : VISBILITY , }
    owner:{type:Schema.Types.ObjectId,ref:"User"}
});

GetemSchema.index({ title: 'text',getem: 'text' });

const Getem = mongoose.model("Getem", GetemSchema);
export { Getem }
