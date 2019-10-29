import { Model, Document, Schema } from "mongoose";
import ObjectId = Schema.Types.ObjectId;
export declare function add(model: Model<Document>, data: Object): Promise<Document>;
export declare function get<T extends Document>(model: Model<T>, _id: ObjectId): Promise<T>;
export declare function find(model: Model<Document>, options: Object): Promise<any>;
export declare function list(model: Model<Document>): Promise<Document[]>;
export declare function remove(model: Model<Document>, _id: ObjectId): Promise<void>;
export declare function update(model: Model<Document>, _id: ObjectId, data: Object): Promise<Document>;
//# sourceMappingURL=crud.d.ts.map