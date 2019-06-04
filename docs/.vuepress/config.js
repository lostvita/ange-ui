const path = require('path')
function resolve (dir) {
    return path.join(__dirname, '..' ,'..', dir)
}

module.exports = {
    title: 'Ange UI',
    description: 'Ange UI Document',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Blog', link: 'https://baidu.com' },
            { text: 'Github', link: 'https://google.com' },
        ],
        sidebar: [
            ['/views/button', '按钮 Button'],
            ['/views/icon', '图标 Icon'],
            ['/views/switch', '开关 Switch'],
            ['/views/table', '表格 Table']
        ]
    },
    markdown: {
        lineNumbers: true
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
              'vue$': 'vue/dist/vue.esm.js',
              '@': resolve('docs'),
              '@scss': resolve('src/scss'),
              '@components': resolve('src/components'),
              '@utils': resolve('src/utils')
            }
        }
    }
}