"use strict";

var express = require("express"),
	app = express(),
	mongoose = require("mongoose");

require("./models/Post");
require("./models/Comment");
mongoose.connect("mongodb://localhost/news");

app
	.use(express.static("public"))
	.listen("8888", function() {
		console.log("Listening on %d.", this.address().port);
	});