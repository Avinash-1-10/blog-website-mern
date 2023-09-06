const express = require("express");
const cors = require("cors");
const blogs = require("./data.js");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/blogDB", { useNewUrlParser: true });

const blgosSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  author: String,
  date: String,
  image: String,
  content: String,
});

const Blog = mongoose.model("Blog", blgosSchema);

app.get("/", (req, res) => {
  const blog = new Blog({
    title: "This is the title",
    subtitle: "This is the subtitle",
    author: "Avinash Yede",
    date: "Tuesday 5 Sept 2023",
    image: "http://image.jpg",
    content: "This is the content",
  });
  blog.save();
  mongoose.connect("mongodb://localhost:27017/blogDB", {
    useNewUrlParser: true,
  });

  const peopleSchema = mongoose.Schema({
    name: String,
  });

  const People = mongoose.model("People", peopleSchema);
  const people = new People({
    name: "Avinash",
  });

  people.save();
  res.json(people);
});

app.get("/blogs", (req, res) => {
  Blog.find()
    .then(blogs => {
      res.json(blogs);
    })
});





app.get("/api/blogs", (req, res) => {
  res.json(blogs);
});

app.post("/api/blog", (req, res) => {
  const blog = req.body;
  blogs.push(blog);
  res.json(blog);
});

app.delete("/api/delete/:id", (req, res) => {
  const id = +req.params.id;
  const index = blogs.findIndex((blog) => blog.id === id);
  blogs.splice(index, 1);
  console.log(id);
  res.json(index);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
