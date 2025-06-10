import { Router } from "express";
import { changePass, signIn, signUp } from "./controller/auth.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();

//sign up (hash password)
router.post("/signUp", signUp);

//sign in (send token)
router.post("/signIn", signIn);

//Change Password
router.put("/changePass", auth(), changePass);

export default router;
