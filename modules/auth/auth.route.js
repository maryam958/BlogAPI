import { Router } from "express";
import { changePass, signIn, signUp } from "./controller/auth.controller.js";
import{auth} from '../../middleware/auth.js'

const router=Router();

// ## 1- sign in (send token)
router.post('/signIn',signIn)



// ## 2- sign up (hash password)
router.post('/signUp',signUp)


router.put('/changePass',auth(),changePass)

export default router;