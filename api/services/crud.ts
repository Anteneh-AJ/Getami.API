import {Model, Document, Schema} from "mongoose";

import ObjectId = Schema.Types.ObjectId;

export async function add(model: Model<Document>, data: Object): Promise<Document> {
    return await model.create(data)
        .then(resp => {
            return resp
        })
        .catch(err => {
            return err.errmsg
        });
}

export async function get<T extends Document>(model: Model<T>, _id: ObjectId): Promise<T> {
    return model.findById(_id)
        .then(resp => {
            return resp
        })
        .catch(err => {

            return err.errmsg
        })
}

export async function find(model: Model<Document>, options: Object) {
    return model.find(options).then(resp => {
        return resp
    }).catch(err => {
        return err.errmsg
    })
}

export async function list(model: Model<Document>): Promise<Document[]> {
    return model.find()
        .then(resp => {
            return resp
        }).catch(err => {
            return err.errmsg
        })
}


export async function remove(model: Model<Document>, _id: ObjectId): Promise<void> {
    await model.findByIdAndRemove(_id)
        .then(resp => {
            return resp
        }).catch(err => {
            return err.errmsg
        });
}

export async function update(model: Model<Document>, _id: ObjectId, data: Object): Promise<Document> {
    return model.findByIdAndUpdate(_id, data)
        .then(resp => {
            return resp;
        })
        .catch(err => {
            return err.errmsg
        })
}
