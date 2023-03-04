import express from "express";
import { PostIt } from "./post.controller";
import { ShowAllMyPosts,ShowEveryPublicPost,SpecificUserPostsByName } from "./post.controller";
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
import { authorization } from "../middleware";
const route = express.Router();

route.post('/send', PostIt );

route.get('/all', ShowAllMyPosts )

route.get('/public', ShowEveryPublicPost);

route.post('/search', SpecificUserPostsByName);

route.delete('/delete', );

//delete and adjust posts?
module.exports = route;