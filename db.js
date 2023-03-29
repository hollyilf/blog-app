const mongoose = require("mongoose");

//Set schema
const postSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

//Set up mondel
const Post = mongoose.model("Post", postSchema);

//Connect to DB: 
const uri = process.env.ATLAS_URI;

const options = {
	useNewUrlParser: true,
};

const connectDB = async () => {
	try {
		await mongoose.connect(uri, options);
		console.log("Connected to DB");
	} catch (err) {
		handleError(err);
	}
};

//Export the connection and the model: 
module.exports = { connectDB, Post };
