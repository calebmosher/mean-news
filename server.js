"use strict";

var express = require("express"),
	app = express();

app
	.use(express.static("public"))
	.listen("8888", function() {
		console.log("Listening on %d.", this.address().port);
	});
