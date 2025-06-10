import { Router } from "express";
import {auth} from '../../middleware/auth.js'
import { deleteAccount, getProfile, updateAccount } from "./controller/user.controller.js";

const router=Router();


// APIS CRUD Operation For User module

router.get('/getProfile',auth(),getProfile)

//update account   (user must be logged in)(Get user ID from token)
router.put('/updateAccount',auth(),updateAccount)


//delete account (with posts and comments created by this account) (user must be logged in)(Get user ID from token)
router.delete('/deleteAcc',auth(),deleteAccount)


export default router;