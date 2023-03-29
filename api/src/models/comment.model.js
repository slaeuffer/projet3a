import { model, Schema } from "mongoose";

const Comment = model(
  "Comment",
  new Schema({
    username: String,
    currentDate: String,
    commentTxt: String,
    replyComment: Array
    
  })
);

export default Comment;