import mongoose from "mongoose";
// ## User has (name ,email,password "hash password" ,age ,phone)

const userSchema=new mongoose.Schema({
    userName:String,
    email:String,
    password:String,
    age:Number,
    phone:Number,
    
})


const userModel=mongoose.model('user',userSchema)


export default userModel;