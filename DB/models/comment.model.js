import mongoose from "mongoose";
// ## Comments has (content, createdBy=> ref to user model)

const commentSchema = new mongoose.Schema({
  content: String,
  createdBy: { type: mongoose.Schema.ObjectId, ref: "user" },
  postID: {
    type: mongoose.Schema.ObjectId,
    ref: "post",
  },
});

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
