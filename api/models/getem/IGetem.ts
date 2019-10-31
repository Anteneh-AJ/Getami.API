import { Document, Schema } from "mongoose"

export interface IGetem extends Document {
    _id: Schema.Types.ObjectId
    title: string
    likes: [
        {
            _By: Schema.Types.ObjectId,
            _On: Date
        }
    ]
    verses: [
        {
            verse: String,
            _By: Schema.Types.ObjectId,
            _CreatedOn: Date
        }
    ],
    visibility: String,
    owner: Schema.Types.ObjectId,
}