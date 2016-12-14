//Config Paths

module.exports = {
  // Here you add the paths to the scss files you get with Bower to import and work with.
  sassIncludes: [
  './src/bower/penny-mixins/src'
  ],

  // Here you add the paths to the full-length js files from your Bower imports
  scriptFiles: [
    './src/bower/jquery/dist/jquery.js',
    ],

  purify: [
    './dist/**/*.html',
    './dist/**/*.js'
  ],

  //Paths to our font files
  fonts: [
    './src/fonts/*.otf',
    './src/fonts/*.ttf'
    ],

  //Asset File Paths
  assets: [
    './src/assets/**/*'
  ],

  //Export path
  exportPath: ['./dist']
};
