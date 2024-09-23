const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ThumbSchema = new Schema({
	id: {
		type: String,
		unique: true,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	desc: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	link: {
		type: String,
		required: true,
	},
});

module.exports = Thumb = mongoose.model("Thumb", ThumbSchema);
