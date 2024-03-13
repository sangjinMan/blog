const db = require("../db");

const findAll = (callback) => {
  db.query("SELECT * FROM blog", callback);
};

const create = (title, content, author, callback) => {
  db.query(
    "INSERT INTO blog (title, content, author) VALUES (?, ?, ?)",
    [title, content, author],
    callback
  );
};

const update = (id, title, content, author, callback) => {
  db.query(
    "UPDATE blog SET title=?, content=?, author=? WHERE id=?",
    [title, content, author, id],
    callback
  );
};

const deletePost = (id, callback) => {
  db.query("DELETE FROM blog WHERE id=?", [id], callback);
};

module.exports = { findAll, create, update, deletePost };
