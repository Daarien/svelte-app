const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const sveltePreprocess = require("svelte-preprocess");
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

const mode = process.env.NODE_ENV || "development";
const prod = mode === "production";

module.exports = {
  entry: {
    bundle: ["./src/main.js"],
  },
  resolve: {
    alias: {
      svelte: path.resolve("node_modules", "svelte"),
    },
    extensions: [".mjs", ".js", ".svelte"],
    mainFields: ["svelte", "browser", "module", "main"],
  },
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: prod ? "[name].[hash].js" : "[name].js",
    chunkFilename: "[name].[id].js",
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs)$/,
        exclude: /@babel(?:\/|\\{1,2})runtime|core-js/,
        loader: "babel-loader",
      },
      {
        test: /\.svelte$/,
        include: /src|svelte/,
        use: [
          "babel-loader",
          {
            loader: "svelte-loader",
            options: {
              preprocess: sveltePreprocess(),
              emitCss: true,
              hotReload: true,
            },
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: prod
          ? [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
          : ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/img",
              name: "[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        test: /\.woff$|\.woff2?$|\.ttf$|\.eot$|\.otf$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/fonts",
              name: "[name].[ext]",
            },
          },
        ],
      },
    ],
  },
  mode,
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.png",
    }),
  ],
  devtool: prod ? "source-map" : "inline-source-map",
  devServer: {
    port: 4000,
    open: true,
    historyApiFallback: true,
  },
  optimization: {
    minimize: prod,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          // Added for profiling in devtools
          keep_classnames: true,
          keep_fnames: true,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        sourceMap: prod,
      }),
    ],
  },
};
