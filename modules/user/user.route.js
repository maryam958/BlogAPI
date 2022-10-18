import { Router } from "express";
import {auth} from '../../middleware/auth.js'
import { deleteAccount, updateAccount } from "./controller/user.controller.js";

const router=Router();




// APIS CRUD Operation For User module



// ## 4- update account   (user must be logged in)(Get user ID from token)
router.put('/updateAccount',auth(),updateAccount)





// ## 5- delete account (with posts and comments created by this account) (user must be logged in)(Get user ID from token)
router.delete('/deleteAcc',auth(),deleteAccount)



export default router;