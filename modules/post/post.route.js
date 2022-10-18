import { Router } from "express";
import {auth} from '../../middleware/auth.js'
import { addPost, deletePost, getAllPosts, getUserPosts, updatePost } from "./controller/post.controller.js";
const router=Router();

// APIS CRUD Operation For Post module
// ## 1- add post  (user must be logged in)(Get user ID from token)
router.post('/addPost',auth(),addPost)


// ## 2- update post  (user must be logged in)(Get user ID from token) (post owner only)
router.put('/updatePost/:id',auth(),updatePost)




// ## 3- Get all posts (with created by details and comments details using populate) (user must be logged in)
router.get('/getAllPosts',auth(),getAllPosts)




// ## 4- Get user posts (with created by details and comments details using populate) (user must be logged in)(Get user ID from token)
router.get('/getUserPosts',auth(),getUserPosts)




// ## 5- Delete Post  (user must be logged in)(Get user ID from token) (post owner only)
router.delete('/deletePost/:postId',auth(),deletePost)


export default router;