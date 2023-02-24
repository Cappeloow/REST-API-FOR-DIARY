import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {type: String, required:true, unique:true},
    password: {type: String, required:true},
    isAdmin : {type:Boolean, default:false}
})

const UserModel = mongoose.models.user || mongoose.model("user", userSchema);

export default UserModel
