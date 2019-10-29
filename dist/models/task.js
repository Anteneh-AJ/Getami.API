"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var TaskSchema = new mongoose_1.Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    task: { type: String, required: true, index: true },
    description: { type: String, required: true, unique: true, index: true },
    deadline: { type: Date, required: true },
    userId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" }
});
TaskSchema.index({ task: 'text', completed: 'boolean' });
var Task = mongoose.model("Task", TaskSchema);
exports.Task = Task;
//# sourceMappingURL=task.js.map