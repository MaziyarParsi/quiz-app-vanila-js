const path = require("path")

module.exports = {
  entry: "script.js",
  output: {
    filename: "my-first-webpack.bundle.js",
    path: path.resolve(__dirname, "build"),
  },
}
