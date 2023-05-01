const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./Data/categories.json");
const news = require("./Data/News.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Dragon is Running");
});

//category
app.get("/categories", (req, res) => {
  res.send(categories);
});

//1. news
app.get("/news", (req, res) => {
  res.send(news);
});

//2. news/:id
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  // console.log(id);
  const selectedNews = news.find((n) => n._id === id);
  res.send(selectedNews);
});

//categories
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((n) => parseInt(n.category_id) === id);
    res.send(categoryNews);
  }
});

app.listen(port, () => {
  console.log(`Dragon API is running on port: ${port}`);
});

/**
 *  data load process: 3 types
 * 1. news
 * 2. news/:id
 * 3.category
 */
