const path = require('path')

const resolve = dir => path.join(__dirname, dir)

const PUBLIC_PATH = process.env.NODE_ENV === 'production' ? '/github-activity/' : '/'

module.exports = {
  lintOnSave: true,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  publicPath: PUBLIC_PATH,
  devServer: {
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://api.github.com',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
