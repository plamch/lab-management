import express from "express";

export const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", (req, res) => {
  res.send("respond with a resource - index");
});
