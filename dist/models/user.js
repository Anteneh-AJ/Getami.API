"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
    createdOn: { type: Date, required: true, default: Date.now() },
    name: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
});
UserSchema.index({ name: 'text', email: 'text' });
var User = mongoose.model("User", UserSchema);
exports.User = User;
//# sourceMappingURL=user.js.map