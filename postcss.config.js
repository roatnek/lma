module.exports = {
  plugins: [
    require('postcss-import')(),
    // require('postcss-custom-properties')(),
    require('postcss-nested')(),
    require('autoprefixer')({
      browsers: ['last 2 versions', 'ie 11']
    })
  ]
};
