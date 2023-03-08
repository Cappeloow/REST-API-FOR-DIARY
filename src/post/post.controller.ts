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
    // if (!title){
    //     return res.status(400).json("Cannot publish without a title");
    // } else if (!content){
    //     return res.status(400).json("Cannot publish without content")
    // }
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

export const deletePost = async (req: Request, res: Response) => {
    try {
      const user = req.body.user;
      const postId = req.body._id;
      console.log(user, postId);
      const post = await PostModel.findOne({ _id: postId, user: user });
      console.log(post);
      if (!post) {
        res.status(404).json({ message: "The post doesn't exist" });
      }
      await PostModel.deleteOne({ _id: postId });
      res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
      res.status(400).json(error);
    }
  };
  
  export const LikeThePost = async (req:Request, res:Response) => {
    try {
        const postId = req.body._id;
        const user = req.body.user;
        const post = await PostModel.findOne({ _id: postId});
        console.log(post);
    if (!post.likes.includes(user)){
        post.likes = [...post.likes, user];
        console.log("vi är här nu");
        await post.save();
        res.status(200).json(post);
    } 
    } catch (error) {
        res.status(404).json({ error: 'Post not found' });
    }
    
  }