const path = require("path")
const fs = require("fs")

module.exports = {
  entry: "./src/server/app/app.js",
  target: "node",
  externals: fs.readdirSync("node_modules")
               .reduce(function(acc, mod) {
                  if (mod === ".bin") {
                    return acc
                  }

                  acc[mod] = "commonjs " + mod
                  return acc
                }, {}),
  node: {
    console: false,
    global: false,
    process: false,
    Buffer: false,
    __filename: false,
    __dirname: false,
  },
  output: {
    path: path.join(__dirname, "dist/server"),
    filename: "app.js",
  },
  resolve: {
    extensions: [
      ".js",
      ".json"
    ]
  },
  module: {
    loaders: [
      // Use babel and eslint to build and validate JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          "babel-loader"
        ]
      },

      // Allow loading of JSON files
      {
        test: /\.json$/,
        loader: "json",
      },
    ]
  }
}
