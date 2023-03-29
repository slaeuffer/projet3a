import db from "../models/index.js";
const Comment = db.comment;

export function addNewComment(req, res) {
    const comment = new Comment({
        username: "AZERTYU",
        currentDate: req.body.currentDate,
        commentTxt: req.body.commentTxt,
        replyComment: req.body.replyComment
    })

    comment.save(function(err) {
        if (err) throw err
    })
    
}