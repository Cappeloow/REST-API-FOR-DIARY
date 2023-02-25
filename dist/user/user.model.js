"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const joi_1 = __importDefault(require("joi"));
exports.Schema = joi_1.default.object({
    username: joi_1.default.string().email().required(),
    password: joi_1.default.string().min(8).required()
});
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false }
});
const UserModel = mongoose_1.default.models.user || mongoose_1.default.model("user", userSchema);
exports.default = UserModel;
