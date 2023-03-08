"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const post_controller_2 = require("./post.controller");
const route = express_1.default.Router();
route.post('/send', post_controller_1.PostIt);
route.get('/all', post_controller_2.ShowAllMyPosts);
route.get('/public', post_controller_2.ShowEveryPublicPost);
route.post('/search', post_controller_2.SpecificUserPostsByName);
route.delete('/delete', post_controller_2.deletePost);
route.put('/like', post_controller_2.LikeThePost);
module.exports = route;
