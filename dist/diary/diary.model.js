"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const DiarySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "user", required: true },
    title: { type: String, required: true },
    content: { type: String, required: true }
    //date?
});
const DiaryModel = mongoose_1.models.diary || (0, mongoose_1.model)('diary', DiarySchema);
module.exports = { DiaryModel };
