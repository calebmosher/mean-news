var express = require("express"),
	router = express.Router();

router.get("/", function(req, res) {
	res.render("index.ejs", { });
});

var mongoose = require("mongoose"),
	Post = mongoose.model("Post"),
	Comment = mongoose.model("Comment");

router
	.get("/posts", function(req, res, next) {
		Post.find(function(err, posts) {
			if (err) return next(err);
			
			res.json(posts);
		});
	})
	.post("/posts", function(req, res, next) {
		console.log(req.body);
		var post = new Post(req.body);
		post.save(function(err, post) {
			if (err) return next(err);
			
			res.json(post);
		});
	})
	.param("post", function(req, res, next, id) {
		var query = Post.findById(id);
		query.exec(function (err, post) {
			if (err) return next(err);
			if (!post) return next(new Error("No post found."));
			
			req.post = post;
			return next();
		});
	})
	.get("/posts/:post", function(req, res) {
		res.json(req.post);
	})


module.exports = router;
