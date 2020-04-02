module.exports = {
    plugins: {
      'autoprefixer': {
        browsers: ['Android >= 4.0', 'iOS >= 8']
      },
      'postcss-pxtorem': {
        rootValue: 37.5,
        propList: ['*'],
        exclude: "element-ui|Front|manage|errorLog|errorPage|layout|login"
      }
    }
  }