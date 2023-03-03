import mongoose from "mongoose";
import joi from "joi";


export const Schema = joi.object({
    username:joi.string().email().required(),
    password:joi.string().min(8).required()
});

const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    isAdmin : {type:Boolean, default:false}
})
//setName.put?


const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel
