import { Request, Response } from "express-serve-static-core";
import PostModel from "./post.model";
import { Post } from "./post.model";

export const PostIt = async (req:Request, res:Response) => {
    try {
        if (req.session){
        const {title, content} = req.body;
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


export const ShowAllMyPosts = async(req:Request, res:Response)=> {
    if (req.session){
        const posts = await PostModel.find({user:req.session.user._id})
        console.log(posts);
        res.status(200).json(posts);
    } 
}


export const ShowEveryPublicPost = async (req:Request, res:Response)=> {
    try {
        const posts = await PostModel.find({public:true});
        posts.length >=1? res.status(200).json(posts) : res.status(401).json("There is no public posts");

    } catch (error) {
        res.status(404).json(error);
    }


}

export const SpecificUserPostsByName = async (req:Request, res:Response)=> {

    try {
        const posts = await PostModel.find({user:req.params.id});
        const publicPosts = posts.filter(post => post.public === true) 
        publicPosts.length >= 1 ? res.status(200).json(publicPosts) : res.status(400).json("The User has no public posts yet"); 
        console.log(req.params.id);
    } catch (error) {
        res.status(404).json(error);
    }


}