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
    user:{type:Schema.Types.ObjectId, ref:"user", required:true},
    title:{type:String, required:true},
    content:{type:String, required:true},
    public:{type:Boolean, default:true}, //this is cool if forexample we can have a payment if users want to see the posts from a specific user.
    // categories: {
    //     type: [Schema.Types.ObjectId],
    //     ref: "category",
    //     required: true
    // }
})


const PostModel = models.diary ||model('post', PostSchema);

export default PostModel;