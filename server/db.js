const mysql = require("mysql2");
require("dotenv").config();

console.log(process.env.DB_DATABASE);

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

db.connect((err) => {
  if (err) {
    console.error("connection error: " + err);
    return;
  }
  console.log("DB connection successful");
});

module.exports = db;
