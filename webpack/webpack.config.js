const HtmlWebpackPlugin = require('html-webpack-plugin'),
	  CopyWebpackPlugin = require('copy-webpack-plugin'),
	  webpack 		    = require('webpack'),
	  path 			    = require('path'),
	  ExtractTextPlugin = require('extract-text-webpack-plugin'),
	  UglifyJSPlugin 	= require('uglifyjs-webpack-plugin');


module.exports = {
	entry: {
		app: './frontend/scripts/app.js'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'build'),
		sourceMapFilename: '[name].map'
	},

module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
       loader: 'babel-loader',
       query: {
      		presets: ['env']
   		}
        }
      ],
  },
module: {
    rules: [
      {
        test: /\.sass|scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:['css-loader', 'sass-loader'],
          publicPath: './build'
        })
      }
    ]
  },

	plugins: [
	new webpack.optimize.CommonsChunkPlugin({name:'vendor'}),
	new UglifyJSPlugin(),
	new HtmlWebpackPlugin({
		template: './build/index.html',
		hash:true
	}),
	new CopyWebpackPlugin([ { from: 'frontend/img', to: 'img'}], 
	{
		copyUnmodified: true
	}),
	new ExtractTextPlugin('app.css')
]
};