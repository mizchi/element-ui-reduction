const path = require("path");
module.exports = {
  entry: {
    main: path.join(__dirname, "src/main"),
    "main-redux": path.join(__dirname, "src/main-redux"),
  },
  module: {
    rules: [
      {
        include: path.join(__dirname, "src"),
        test: /\.js/,
        use: "babel-loader",
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(ttf|woff)/,
        use: "file-loader",
      },
    ],
  },
};
