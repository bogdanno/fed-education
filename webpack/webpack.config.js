var HtmlWebpackPlugin = require('html-webpack-plugin'),
	CopyWebpackPlugin = require('copy-webpack-plugin'),
	webpack 		  = require('webpack'),
	path 			  = require('path'),
	ExtractTextPlugin = require('extract-text-webpack-plugin'),
	UglifyJSPlugin 	  = require('uglifyjs-webpack-plugin');



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
       options: {
      		presets: ['env']
   		}
        }
      ],
  },
module: {
    loaders: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use:['css-loader', 'sass-loader'],
          publicPath: 'build'
        })
      },
    ]
  },

	plugins: [
	new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'vendor.js'}),
	new UglifyJSPlugin(),
	new HtmlWebpackPlugin({
		template: './build/index.html',
		hash:true
	}),
	new CopyWebpackPlugin([ { from: 'frontend/img', to: 'img'}], 
	{
		copyUnmodified: true
	}),
	new ExtractTextPlugin({filename:"app.css"})
]
};