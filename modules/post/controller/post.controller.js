import postModel from "../../../DB/models/post.model.js";
import commentModel from "../../../DB/models/comment.model.js";
import userModel from "../../../DB/models/user.model.js";
import { auth } from "../../../middleware/auth.js";

// title ,content,
// createdBy=> ref to user model ,
//  comments =>Array of ID ref to comment model )

export const addPost = async (req, res) => {
  let { title, content } = req.body;
  const addedPost = await (
    await postModel.create({ title, content, createdBy: req.currentUserID })
  ).populate("comments");
  res.json({ message: "Post is Added Successfully", addedPost });
};




export const updatePost = async (req, res) => {
  let { id } = req.params;
  let { title } = req.body;
  const post = await postModel.findById(id);
  console.log(post);
  if (post) {
    if (post.createdBy.toString() == req.currentUserID.toString()) {
      
      const updatedPost = await postModel.findByIdAndUpdate(id,{ title });
      console.log(title);
      res.json({ message: "Post is Updated Successfully", updatedPost });
    } else {
      res.json({ message: "you are not allowed to update this post" });
    }
  }
};




// ## 3- Get all posts (with created by details and comments details using populate) (user must be logged in)
export const getAllPosts = async (req, res) => {
  const posts = await postModel
    .find({ createdBy: req.currentUserID })
    .populate("createdBy")
    .populate("comments");
  res.json({ message: "Done", posts });
};




// ## 4- Get user posts (with created by details and comments details using populate) (user must be logged in)(Get user ID from token)
export const getUserPosts = async (req, res) => {
  const posts = await postModel
    .find({ createdBy: req.currentUserID })
    .populate("createdBy")
    .populate("comments");
  res.json({ message: "Done", posts });
};



// ## 5- Delete Post  (user must be logged in)(Get user ID from token) (post owner only)
export const deletePost = async (req, res) => {
    let { postId } = req.params;
    const post = await postModel.findById(postId);
    if (post) {
      if (post.createdBy.toString() == req.currentUserID.toString()) {
        const deletedPost = await postModel.deleteOne({ postId });
        const deletedComments=await commentModel.deleteMany({postID:postId})
        res.json({ message: "Done", deletedPost });
      } else {
        res.json({ message: "you are not allowed to delete this post" });
      }
    }
  };


