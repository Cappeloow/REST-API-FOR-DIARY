import express from "express";
import { PostIt } from "./post.controller";
import { ShowAllMyPosts,ShowEveryPublicPost } from "./post.controller";
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
import { authorization } from "../middleware";
const route = express.Router();

route.post('/send',authorization, PostIt );

route.get('/all', authorization, ShowAllMyPosts )

route.get('/public', ShowEveryPublicPost);

module.exports = route;