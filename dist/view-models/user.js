"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toUserResponse(user) {
    var resp = {
        _id: user._id,
        name: user.name,
        email: user.email
    };
    return resp;
}
exports.toUserResponse = toUserResponse;
//# sourceMappingURL=user.js.map