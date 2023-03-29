require("dotenv").config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const app = express();
const { connectDB, Post } = require("./db.js");

connectDB();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {
  //Return all posts and sort by date order 
  Post.find({}).sort({date: "desc"}).exec(function(err, foundPosts) {
    if (!err) {
      res.render("home", {
        posts: foundPosts
      });
    }
  });
});

app.get("/about", function(req, res) {
  res.render("about");
});

app.get("/contact", function(req, res) {
  res.render("contact");
});

app.get("/compose", function(req, res) {
  res.render("compose", 
  {date: new Date()}
  );
});

app.post("/compose", function(req, res) {
  const content = req.body.postBody;
  const newPost = new Post({
    date: new Date(),
    content: content
  });
  newPost.save();
  res.redirect("/");
});

app.get("/posts/:postId", function(req, res) {
	const postId = req.params.postId;
	// Search the DB for the post with the id of the requested title
	Post.findOne(
		{
			_id: postId,
		},
		function (err, results) {
			if (!err) {
				const date = results.date;
				const content = results.content;
				res.render("post", {
					date: date,
					content: content,
				});
			}
		}
	);
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
