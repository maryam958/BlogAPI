import mongoose, { Schema } from "mongoose";
// ## posts has (title ,content,
// createdBy=> ref to user model ,
//  comments =>Array of ID ref to comment model )

const postSchema=new mongoose.Schema({
    title:String,
    content:String,
    createdBy: 
        { type:mongoose.Schema.ObjectId,
          ref: 'user'},
    comments:[{ 
        type: mongoose.Schema.ObjectId,
         ref: 'comment'}]
    

})

const postModel=mongoose.model('post',postSchema)

export default postModel;