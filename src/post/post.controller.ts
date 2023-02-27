import { Request, Response } from "express-serve-static-core";
import PostModel from "./post.model";
import { Post } from "./post.model";

export const PostIt = async (req:Request, res:Response) => {
    try {
    const {user, title, content} = req.body;
    const createPost:Post = await PostModel.create({
        user:user,
        title:title,
        content:content
    });
    res.status(200).json(createPost);
    } catch (error) {
        res.status(404).json(error);
    }  
}