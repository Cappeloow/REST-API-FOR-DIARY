import express from "express";
import { PostIt } from "./post.controller";
import { ShowAllMyPosts,ShowEveryPublicPost,SpecificPostByName } from "./post.controller";
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
import { authorization } from "../middleware";
const route = express.Router();

route.post('/send',authorization, PostIt );

route.get('/all', authorization, ShowAllMyPosts )

route.get('/public', ShowEveryPublicPost);

route.get('/:id', SpecificPostByName);


//delete and adjust posts?
module.exports = route;