const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    tittle: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", PostSchema);

module.exports = Post;
