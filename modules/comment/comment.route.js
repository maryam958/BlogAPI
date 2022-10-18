import { Router } from "express";
import {auth} from '../../middleware/auth.js'
import { addComment, deleteComment, updateComment } from "./controller/comment.controller.js";

const router=Router();


// APIS CRUD Operation For Comment module
// ## 1- Add Comment  (user must be logged in)(Get user ID from token)
router.post('/addComment/:id',auth(),addComment)


// ## 2- Update comment (user must be logged in)(Get user ID from token) (post owner only)
router.put('/updateComment/:id',auth(),updateComment)



// ## 3- Delete comment (user must be logged in)(Get user ID from token) (comment owner and post owner)
router.delete('/deleteComment/:id/:commentId',auth(),deleteComment)

export default router;