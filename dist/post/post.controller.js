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
exports.SpecificUserPostsByName = exports.ShowEveryPublicPost = exports.ShowAllMyPosts = exports.PostIt = void 0;
const post_model_1 = __importDefault(require("./post.model"));
const PostIt = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user, title, content } = req.body;
        const createPost = yield post_model_1.default.create({
            user: user,
            title: title,
            content: content
        });
        res.status(200).json(createPost);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.PostIt = PostIt;
const ShowAllMyPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.session) {
        const posts = yield post_model_1.default.find({ user: req.session.user._id });
        console.log(posts);
        res.status(200).json(posts);
    }
});
exports.ShowAllMyPosts = ShowAllMyPosts;
const ShowEveryPublicPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield post_model_1.default.find({ public: true });
        posts.length >= 1 ? res.status(200).json(posts) : res.status(401).json("There is no public posts");
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.ShowEveryPublicPost = ShowEveryPublicPost;
const SpecificUserPostsByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //populate const posts = await PostModel.find({ user: req.params.id }).populate('user');
        const posts = yield post_model_1.default.find({ user: req.params.id });
        const publicPosts = posts.filter(post => post.public === true);
        publicPosts.length >= 1 ? res.status(200).json(publicPosts) : res.status(400).json("The User has no public posts yet");
        console.log(req.params.id);
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.SpecificUserPostsByName = SpecificUserPostsByName;
