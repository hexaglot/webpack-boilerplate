//postCSS config
module.exports = {
  plugins: [
    require('autoprefixer')({}),
    //cssnano - this can be called by using minimize option on CSS loader in webpack config
    require('cssnano')({
      preset: 'default'
    })
  ]
};
