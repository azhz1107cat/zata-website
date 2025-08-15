const { defineConfig } = require('@vue/cli-service')
const repoName = 'zata-website'

module.exports = defineConfig({
  transpileDependencies: true,
  
  publicPath: process.env.NODE_ENV === 'production' 
    ? // 域名下用根路径 "/"
      (typeof window !== 'undefined' && window.location.host === 'zata.random321.com')
        ? '/' 
        : `/${repoName}/` // GitHub 默认地址下用仓库名路径
    : '/', // 开发环境保持根路径
  
 
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
