import express from "express";
import { PostIt } from "./post.controller";
import { ShowAllPosts } from "./post.controller";
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
import { authorization } from "../middleware";
const route = express.Router();

route.post('/send',authorization, PostIt );

route.get('/all', authorization, ShowAllPosts )
module.exports = route;