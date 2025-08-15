const { defineConfig } = require('@vue/cli-service')
const repoName = 'zata-website'

module.exports = defineConfig({
  transpileDependencies: true,
  
 publicPath: process.env.NODE_ENV === 'production' 
    ? '/'  // 自定义域名下，资源路径为 /assets/...
    : '/', // 开发环境不变
  
 
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.plugin('copy').use(require('copy-webpack-plugin'), [
        {
          patterns: [
            {
              from: 'CNAME',
              to: 'CNAME',
              toType: 'file',
              noErrorOnMissing: true
            }
          ]
        }
      ])
    }
  }
})
