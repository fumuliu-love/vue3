const path = require('path')

export default {
    /**
   * 在生产中服务时的基本公共路径。
   * @default '/'
   */
    base: './',
    /**
     * 与“根”相关的目录，构建输出将放在其中。如果目录存在，它将在构建之前被删除。
     * @default 'dist'
     */
    outDir: 'dist',
    port: 3000,
    // 是否自动在浏览器打开
    open: false,
    // 是否开启 https
    https: false,
    // 服务端渲染
    ssr: false,
    // 引入第三方的配置
    optimizeDeps: {
        include: []
    },
    alias: {
        // 键必须以斜线开始和结束
        '/@/': path.resolve(__dirname, './src')
        // '/@components/': path.resolve(__dirname, './src/components')
    },
    proxy: {
        '/api': {
            target: 'http://192.168.31.166:3000/',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
}