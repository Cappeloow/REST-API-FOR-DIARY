import express from "express";
import { PostIt } from "./post.controller";
// import { validate } from "../middleware";
// import { JoiSchema } from "./post.model";
const route = express.Router();

route.post('/send', PostIt );

module.exports = route;