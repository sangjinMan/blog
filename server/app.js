const express = require("express");
const postRoutes = require("./routes/postRoute");
const app = express();
const cors = require("cors");
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", postRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
