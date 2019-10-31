import { Document, Schema } from "mongoose"

export interface IGetem extends Document {
    _id: Schema.Types.ObjectId
    task: string
    description: string
    deadline: Date
    userId: Schema.Types.ObjectId
}