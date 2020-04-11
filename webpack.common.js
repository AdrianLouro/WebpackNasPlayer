const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: {
    app: './src/app.js',
    home: './src/home.js',
    videos: './src/videos.js',
  },
  output: {
    filename: '[name].bundle.[contenthash].js',
    path: path.resolve(__dirname, 'dist/build'),
    publicPath: '/'
  },
  optimization: {
    moduleIds: 'hashed',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new Dotenv({
      safe: true,
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Home',
      template: './src/assets/views/home-view/home-view.html',
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Video list',
      template: './src/assets/views/videos-view/videos-view.html',
      filename: 'videos.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader',
        ],
      }
    ],
  },
  resolve: {
    alias: {
      Src: path.resolve(__dirname, 'src'),
      Views: path.resolve(__dirname, 'src/assets/views'),
      Components: path.resolve(__dirname, 'src/assets/components'),
      Providers: path.resolve(__dirname, 'src/assets/providers'),
      Styles: path.resolve(__dirname, 'src/assets/styles'),
      Images: path.resolve(__dirname, 'src/assets/images'),
    }
  }
};