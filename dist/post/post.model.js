"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// export const JoiSchema = joi.object({
//     title:joi.string().min(1).required(),
//     content:joi.string().min(2).required()
// });
const PostSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    public: { type: Boolean, default: false }, //this is cool if forexample we can have a payment if users want to see the posts from a specific user.
    // categories: {
    //     type: [Schema.Types.ObjectId],
    //     ref: "category",
    //     required: true
    // }
});
const PostModel = mongoose_1.models.diary || (0, mongoose_1.model)('post', PostSchema);
exports.default = PostModel;
