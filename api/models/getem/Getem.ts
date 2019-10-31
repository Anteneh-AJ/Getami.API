import * as mongoose from "mongoose";
import { Schema } from 'mongoose';

const enums = {
    visibility: {
        PRIVATE: "PRIVATE",
        PUBLIC: "PUBLIC"
    }
};

const GetemSchema = new Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    title: { type: String, required: true, unique: true, index: true },
    likes: [
        {
            _By: { type: Schema.Types.ObjectId, ref: "User" },
            _On: { type: Date, default: Date.now }
        }
    ],
    verses: [
        {
            verse: { type: String },
            _By: { type: Schema.Types.ObjectId, ref: "User" },
            _CreatedOn: { type: Date, default: Date.now }
        }
    ],
    visibility: { type: String, enum: enums.visibility },
    owner: { type: Schema.Types.ObjectId, ref: "User" },
});

GetemSchema.index({ title: 'text' });

const Getem = mongoose.model("Getem", GetemSchema);
export { Getem }
