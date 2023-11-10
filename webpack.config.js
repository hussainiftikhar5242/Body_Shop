module.exports = {
  module: {
    loaders: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: ['src/sass'], // Specify the path to your Sass files
              },
            },
          },
        ],
      },
    ],
  },
};
