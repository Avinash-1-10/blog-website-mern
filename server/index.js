const express = require("express");
const cors = require("cors");
const blogs = require("./data.js");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/api/blog", (req, res) => {
  const blog = req.body;
  blogs.push(blog);
  res.json(blog);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
