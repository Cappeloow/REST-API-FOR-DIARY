import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    firstName: {type: String, required:true},
    userName: {type: String, required:true},
    password: {type: String, required:true},
    isAdmin : {type:Boolean, default:false}
})

const UserModel = mongoose.model("user", userSchema);

export default UserModel
