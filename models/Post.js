var mongoose = require("mongoose");

var PostSchema = new mongoose.Schema({
	title: String,
	url: String,
	description: String,
	upvotes: {
		type: Number,
		default: 0
	},
	comments: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}
	]
});

mongoose.model("Post", PostSchema);