import { addNewComment } from "../controllers/comment.controller.js";

export function commentRoutes(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/comment/add", addNewComment);

};