const { defineConfig } = require('@vue/cli-service')

const repoName = 'zata-website'

module.exports = defineConfig({
  transpileDependencies: true,
  
  publicPath: process.env.NODE_ENV === 'production' 
    ? `/${repoName}/`
    : '/',
  
  outputDir: 'dist',
  
  assetsDir: 'assets',
  
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('copy').use(require('copy-webpack-plugin'), [
        {
          patterns: [
            {
              from: 'CNAME',
              to: 'CNAME',
              toType: 'file'
            }
          ]
        }
      ])
    }
  }
})
