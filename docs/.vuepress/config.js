module.exports = {
	title: '前端打工档案',
	description: '工作整理总结，持续学习~',
	port: 8090,
	themeConfig: {
		logo: '/assets/images/front.jpg',
		nav: [
			{ text: '首页', link: '/guide' },
			{ text: '基础', link: '/basics/' },
			{ text: '框架', link: '/frame/' },
			{ text: '面试题', link: '/interview/' },
			{
				text: '专题',
				ariaLabel: '专题',
				items: [
					{
						text: '设计模式和最佳实践',
						link: '',
					},
				],
			},
			{ text: '更多', link: '/more/cmder' },
			{ text: 'github', link: 'https://google.com' },
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
		},
		lastUpdated: 'Last Updated',
		smoothScroll: true,
	},
};
