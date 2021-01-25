module.exports = {
	title: '前端打工档案',
	description: '工作整理总结，持续学习~',
	port: 8090,
	themeConfig: {
		logo: '/assets/images/front.jpg',
		nav: [
			{ text: '指南', link: '/guide' },
			{
				text: '笔记',
				ariaLabel: '笔记',
				items: [
					{
						text: 'Html',
						link: '/notes/Html/',
					},
					{
						text: 'Css',
						link: '/notes/Css/',
					},
					{
						text: 'JavaScript',
						link: '/notes/JavaScript/contextStack',
					},
				],
			},
			{ text: '面试题', link: '/interview/' },
			{
				text: '专题',
				ariaLabel: '专题',
				items: [
					{
						text: 'Javascript高级程序设计（第4版）',
						link: '/specialColumn/jsgjcxsj4/',
					},
					{
						text: '设计模式和最佳实践',
						link: '',
					},
				],
			},
			{ text: '更多', link: '/more/cmder' },
			{
				text: 'github',
				link:
					'https://github.com/wanglujiu/wanglujiu.github.io/tree/gh-pages',
			},
		],
		sidebar: {
			'/more/': [
				{
					title: '开发工具', // 必要的
					collapsable: false, // 可选的, 默认值是 true,
					sidebarDepth: 2,
					children: ['cmder', 'nvm', 'nrm', 'vscode'],
				},
			],
			'/notes/': [
				{
					title: 'Html',
					collapsable: false,
					sidebarDepth: 2,
					children: [],
				},
				{
					title: 'Css',
					collapsable: false,
					sidebarDepth: 2,
					children: [],
				},
				{
					title: 'JavaScript',
					collapsable: false,
					sidebarDepth: 2,
					children: ['JavaScript/contextStack'],
				},
			],
		},
		lastUpdated: 'Last Updated',
		smoothScroll: true,
	},
}
