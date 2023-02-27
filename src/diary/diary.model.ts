import {Schema, model, models} from "mongoose";

interface Diary {
    user:string,
    title:string,
    content:string
}


const DiarySchema = new Schema({
    user:{type:Schema.Types.ObjectId, ref:"user", required:true},
    title:{type:String, required:true},
    content:{type:String, required:true}
    //date?
})


const DiaryModel = models.diary ||model('diary', DiarySchema);

module.exports = {DiaryModel};