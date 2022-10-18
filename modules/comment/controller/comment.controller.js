import { isObjectIdOrHexString } from "mongoose";
import commentModel from "../../../DB/models/comment.model.js";
import postModel from "../../../DB/models/post.model.js";

// ## Comments has (content, createdBy=> ref to user model)

export const addComment = async (req, res) => {
  let { id } = req.params;
  let { content } = req.body;
  const comment = await commentModel({
    content,
    createdBy: req.currentUserID,
    postID: id,
  });
  const SavedComment = await comment.save();
  const post = await postModel.findOneAndUpdate(
    { _id: id },
    { $push: { comments: comment } }
  );
  console.log(post);
  console.log(comment);
  res.json({ message: "Comment was added successfully", SavedComment });
};



export const updateComment = async (req, res) => {
  let { id } = req.params;
  let { content } = req.body;
  const updateComment = await commentModel.findByIdAndUpdate(
    id,
    {
      content,
    },
    { new: true }
  );
  res.json({ message: "Comment was updated successfully", updateComment });
};



export const deleteComment = async (req, res) => {
  let { id, commentId } = req.params;
  try {
    const post = await postModel.findByIdAndUpdate(
      id,
      {
        $pull: { comments: commentId },
      },
      { new: true }
    );

    if (!post) {
      res.json({ message: "Post not found" });
    }

    const deletedComment = await commentModel.findByIdAndDelete(commentId);

    res.json({ message: "Comment deleted Successfully", deletedComment });
  } catch (err) {
    console.log(err);
    res.json({ message: "Failed" });
  }
};
