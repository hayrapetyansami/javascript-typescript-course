const path = require("node:path");

module.exports = {
	mode: "development", // development || production
	entry: "./src/js/index.js",
	output: {
		path: path.resolve(__dirname, "dist/js"),
		filename: "all.js",
	},
	watch: true
};