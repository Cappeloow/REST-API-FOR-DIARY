"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// interface Diary {
//     user:string,
//     title:string,
//     content:string
// }
const DiarySchema = new mongoose_1.Schema({
    // user:{type:Schema.Types.ObjectId, ref:"user", required:true},
    diary: { type: String, required: true },
    content: { type: String, required: true },
    // categories: {
    //     type: [Schema.Types.ObjectId],
    //     ref: "category",
    //     required: true
    // }
    //date?
});
const DiaryModel = mongoose_1.models.diary || (0, mongoose_1.model)('diary', DiarySchema);
module.exports = { DiaryModel };
