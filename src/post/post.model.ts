import {Schema, model, models} from "mongoose";
import joi from "joi";

export interface Post {
    title:string,
    content:string
}

// export const JoiSchema = joi.object({
//     title:joi.string().min(1).required(),
//     content:joi.string().min(2).required()
// });




const PostSchema = new Schema({
    user:{type:String, required:true},
    title:{type:String, required:true},
    content:{type:String, required:true},
    public:{type:Boolean, default:true}, //this is cool if forexample we can have a payment if users want to see the posts from a specific user.
    lastActiveAt: {
        type: Date,
        default: Date.now
      },
    likes:{type:Number, default:0}
    })


const PostModel = models.diary ||model('post', PostSchema);

export default PostModel;