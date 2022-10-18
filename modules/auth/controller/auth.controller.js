import userModel from "../../../DB/models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const signUp = async (req, res) => {
  let { userName, email, password, cPassword, age, phone } = req.body;
  if (password == cPassword) {
    const user = await userModel.findOne({ email });
    if (user) {
      res.json({ message: "Already register" });
    } else {
      const hashed = await bcrypt.hashSync(password, 5);
      const saveUser = await userModel({
        userName,
        email,
        password: hashed,
        age,
        phone,
      });
      const savedUser = await saveUser.save();
      res.json({ message: "Registered successfully", savedUser });
    }
  } else {
    res.json({ message: "Password doesn't match cPassword" });
  }
};



export const signIn = async (req, res) => {
  let { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (user) {
    const matched = await bcrypt.compareSync(password, user.password);
    if (matched) {
      const token = jwt.sign({ id: user._id }, process.env.tokenKey, {
        expiresIn: 60 * 60,
      });
      console.log(token);
      res.json({ message: "Welcome, you are logged in now", token });
    } else {
      res.json({ message: "In-correct password" });
    }
  } else {
    res.json({ message: "you have to register first" });
  }
};



// ## 3-Change password  (user must be logged in)(Get user ID from token)
export const changePass =async (req,res)=>{
  const{password}=req.body;
  const hashed =await bcrypt.hashSync(password,6);
  const NewPass=await userModel.findByIdAndUpdate(
    {_id:req.currentUserID},{
      password:hashed
    },{new:true}
  )
  res.json({message:"Password Changed",NewPass})
}