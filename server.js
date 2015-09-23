"use strict";

var express = require("express"),
	app = express(),
	mongoose = require("mongoose");

require("./models/Post");
require("./models/Comment");
mongoose.connect("mongodb://localhost/news");

var router = require("./routes/index.js");

app
	.use(express.static("public"))
	.use(router)
	.listen("8888", function() {
		console.log("Listening on %d.", this.address().port);
	});