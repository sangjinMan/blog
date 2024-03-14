const express = require("express");
const {
  getPostId,
  getPosts,
  createPost,
  updatePost,
  deletePost,
} = require("../controllers/postController");
const router = express.Router();

router.get("/get", getPosts);
router.post("/create", createPost);
router.put("/update/:id", updatePost);
router.delete("/delete/:id", deletePost);
router.get("/get/:id", getPostId);

module.exports = router;
