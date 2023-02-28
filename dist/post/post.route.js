"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("./post.controller");
const post_controller_2 = require("./post.controller");
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
const middleware_1 = require("../middleware");
const route = express_1.default.Router();
route.post('/send', middleware_1.authorization, post_controller_1.PostIt);
route.get('/all', middleware_1.authorization, post_controller_2.ShowAllMyPosts);
route.get('/public', post_controller_2.ShowEveryPublicPost);
route.get('/:id', post_controller_2.SpecificPostByName);
//delete and adjust posts?
module.exports = route;
