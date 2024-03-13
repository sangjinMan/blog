const PostModel = require("../models/postModel");

const getPosts = (req, res) => {
  PostModel.findAll((err, results) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    res.json(results);
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

module.exports = { getPosts, createPost, updatePost, deletePost };
