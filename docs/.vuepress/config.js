module.exports = {
    title: 'Ted UI',
    description: 'Ted UI Document',
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
    }
}