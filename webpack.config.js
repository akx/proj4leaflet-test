module.exports = {
	entry: './index.js',
	output: {
		path: __dirname,
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /.js$/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['env'],
					},
				},
				exclude: /node_modules/,
			},
		],
	},
};