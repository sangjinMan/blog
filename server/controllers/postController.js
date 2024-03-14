const PostModel = require("../models/postModel");

const getPosts = (req, res) => {
  PostModel.findAll((err, results) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    res.json(results);
  });
};

const getPostId = (req, res) => {
  const { id } = req.params;

  PostModel.getPost(id, (err, results) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    if (results.length === 0)
      return res.status(404).json({ error: "Post not found" });
    res.status(200).json(results[0]);
  });
};

const createPost = (req, res) => {
  const { title, content, author } = req.body;
  PostModel.create(title, content, author, (err) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    res.status(201).json({ title, content, author });
  });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content, author } = req.body;
  PostModel.update(id, title, content, author, (err) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    res.json({ title, content, author });
  });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  PostModel.deletePost(id, (err) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    res.json({ id });
  });
};

module.exports = { getPosts, createPost, updatePost, deletePost, getPostId };
