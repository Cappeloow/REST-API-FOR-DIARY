import { Request, Response } from "express-serve-static-core";
import PostModel from "./post.model";
import { Post } from "./post.model";

export const PostIt = async (req:Request, res:Response) => {
    try {
        if (req.session){
        const {user, title, content} = req.body;
        const createPost:Post = await PostModel.create({
        user:req.session.user._id,
        title:title,
        content:content
    });
    res.status(200).json(createPost);

        }
    } catch (error) {
        res.status(404).json(error);
    }  
}


export const ShowAllPosts = async(req:Request, res:Response)=> {
    if (req.session){
        const posts = await PostModel.find({user:req.session.user._id})
        console.log(posts);
        res.status(200).json(posts);
    }

}