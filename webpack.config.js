const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // разделяем код на чанки
  /*optimization: {
    splitChunks: { chunks: "all" },
  },*/
  // точка входа - исходный файл и директория исходников
  entry: { index: path.resolve(__dirname, "source", "index.js") },
  // куда складывать скомпилированный файл
  output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, "source", "index.html"),
    }),
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "node_modules/.cache/cache-loader"
              ),
            },
          },
          "style-loader",
          "css-loader",
        ],
      },
      {
        test: /.s[ac]ss$/i,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "node_modules/.cache/cache-loader"
              ),
            },
          },
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      /*   {
        test: /.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "cache-loader",
            options: {
              cacheDirectory: path.resolve(
                __dirname,
                "node_modules/.cache/cache-loader"
              ),
            },
          },
          "babel-loader",
        ],
      },*/
    ],
  },
};
