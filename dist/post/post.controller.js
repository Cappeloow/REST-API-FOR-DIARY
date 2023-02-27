"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostIt = void 0;
const post_model_1 = __importDefault(require("./post.model"));
const PostIt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.session) {
            const { user, title, content } = req.body;
            const createPost = yield post_model_1.default.create({
                user: req.session.user._id,
                title: title,
                content: content
            });
            res.status(200).json(createPost);
        }
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.PostIt = PostIt;
