import { Request, Response } from "express-serve-static-core";
import PostModel from "./post.model";
import { Post } from "./post.model";
export const PostIt = async (req:Request, res:Response) => {
    try {
        const {user, title, content } = req.body;
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


export const ShowAllMyPosts = async(req:Request, res:Response)=> {
        try {
        const posts = await PostModel.find({user:req.params})
        if (!posts){
            res.status(400).json("You have no posts yet...")
        }
        console.log(posts);
        res.status(200).json(posts);
        } catch (error) {
            res.status(404).json(error);
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
        //populate const posts = await PostModel.find({ user: req.params.id }).populate('user');
        console.log(req.body.user);
        const posts = await PostModel.find({user:req.body.user});
        const publicPosts = posts.filter(post => post.public === true) 
        publicPosts.length >= 1 ? res.status(200).json(publicPosts) : res.status(400).json("The User has no public posts yet"); 
    } catch (error) {
        res.status(404).json(error);
    }


}

export const deletePost = async (req:Request, res:Response) => {
    try {
    const user = req.body.user;
    const postId = req.body._id
    const post =  await PostModel.deleteOne({user,_id:postId });
    if(!user){
        res.status(404).json("It's not your post")
    }
    if (!post){
        res.send(404).json("The post doesn't exist");
    }    
    await PostModel.deleteOne({ _id: postId });
    res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        
    }
    

   //if its users posts we have possibility, otherwise dont show the option to delete it.
}