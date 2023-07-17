const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { merge } = require('webpack-merge');

const deps = require('./package.json').dependencies;

const config = {
	mode: 'development',
	entry: './index.js',
	devtool: 'source-map',
	target: 'web',
	stats: {
		children: true
	},
	devServer: {
		port: 3100,
		static: false,
		client: {
			overlay: {
				warnings: false,
				errors: true
			}
		},
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	module: {
		rules: [
			{
				test: /\.js[x]?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					presets: ['@babel/react']
				}
			}
		]
	},
	plugins: [
		new ModuleFederationPlugin({
			name: 'DannysComponent',
			filename: 'remoteEntry.js',
			exposes: {
				'./DannysComponent': './DannysComponent.jsx'
			},
			remotes: {},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: '^16.9.0'
				},
				'react-dom': {
					singleton: true,
					requiredVersion: '^16.9.0'
				}
			}
		}),
		new HtmlWebPackPlugin({
			environment: 'development',
			template: path.resolve(__dirname, 'public/index.html')
		})
	]
};

module.exports = config;
