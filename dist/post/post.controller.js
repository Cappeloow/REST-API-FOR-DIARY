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
exports.deletePost = exports.SpecificUserPostsByName = exports.ShowEveryPublicPost = exports.ShowAllMyPosts = exports.PostIt = void 0;
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
    try {
        const posts = yield post_model_1.default.find({ user: req.params });
        if (!posts) {
            res.status(400).json("You have no posts yet...");
        }
        console.log(posts);
        res.status(200).json(posts);
    }
    catch (error) {
        res.status(404).json(error);
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
        console.log(req.body.user);
        const posts = yield post_model_1.default.find({ user: req.body.user });
        const publicPosts = posts.filter(post => post.public === true);
        publicPosts.length >= 1 ? res.status(200).json(publicPosts) : res.status(400).json("The User has no public posts yet");
    }
    catch (error) {
        res.status(404).json(error);
    }
});
exports.SpecificUserPostsByName = SpecificUserPostsByName;
const deletePost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body.user;
        const postId = req.body._id;
        console.log(user, postId);
        const post = yield post_model_1.default.findOne({ _id: postId, user: user });
        console.log(post);
        if (!post) {
            res.status(404).json({ message: "The post doesn't exist" });
        }
        yield post_model_1.default.deleteOne({ _id: postId });
        res.status(200).json({ message: 'Post deleted successfully' });
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.deletePost = deletePost;
