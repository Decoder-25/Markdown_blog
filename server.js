const express = require("express");
const articleRouter = require("./routes/articles");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const articles = [
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Test description",
    },
    {
      title: "Test article",
      createdAt: new Date(),
      description: "Test description2",
    },
  ];
  res.render("articles/index", { articles: articles });
  // res.send("h2")
});
app.use("/articles", articleRouter);
app.listen(5000);
