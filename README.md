# webpack-study
study webpack
## 最终配置文件

```js
//webpack.config.js
var path = require('path');
var webpack = require('webpack');

var config = {
  entry: path.resolve(__dirname, 'app/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/, 
        loader: "babel-loader", 
        query:
          {
            presets:['react']
          }
      },
      {
        test: /\.css$/, // Only .css files
        loader: 'style-loader!css-loader?modules' 
      },
      // SASS
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader?modules'
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.woff$/,
        loader: 'url?limit=100000'
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('This file is created by chenss')
  ]
};

module.exports = config;
```
```js
//package.json
"scripts": {
    "build": "webpack",
    "dev": "webpack-dev-server --devtool eval --progress --colors --hot --content-base build"
  }
```
## 安装过程
1. 新建项目文件结构

		|-/app
		|--|-main.js
		|--|-/components
		|----|-components.jsx
		|----|-components.scss
		|-/build
		|--|-bundle.js (自动创建)
		|--|-index.html
		|-package.json
		|-webpack.config.js
2. `npm init`进行初始化
3. `npm install -g webpack`全局安装webpack
4. `npm install --save-dev webpack`安装到你的项目目录
5. `npm i webpack-dev-server --save-dev`装webpack server
6. `npm run dev`本地服务器运行
7. 配置react环境
	```
	npm install babel-loader --save-dev
	npm install react react-dom --save-dev 
	npm install babel-preset-react
	```
	
8. `npm install css-loader style-loader --save-dev`装css加载
9. `npm install sass-loader --save-dev`装sass加载(先装node-sass)
10. `npm install url-loader --save-dev`装图片url加载
11. css模块化
12. 引入BannerPlugin插件

	
>**番外：**<br>有时候可能希望项目的样式能不要被打包到脚本中，而是独立出来作为.css，然后在页面中以<link>标签引入。这时候我们需要 extract-text-webpack-plugin 来帮忙：
```js
var webpack = require('webpack');
    var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
    var ExtractTextPlugin = require("extract-text-webpack-plugin");
 
    module.exports = {
        plugins: [commonsPlugin, new ExtractTextPlugin("[name].css")],
        entry: {
        //...省略其它配置
```
