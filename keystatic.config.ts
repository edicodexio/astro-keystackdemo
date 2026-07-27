import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'github',
		repo: { owner: 'edicodexio', name: 'astro-keystackdemo' },
	},
	collections: {
		posts: collection({
			label: 'Статии',
			slugField: 'title',
			path: 'src/content/posts/*',
			format: { contentField: 'content' },
			schema: {
				title: fields.slug({ name: { label: 'Заглавие' } }),
				date: fields.date({ label: 'Дата' }),
				excerpt: fields.text({
					label: 'Кратко описание',
					multiline: true,
				}),
				cover: fields.image({
					label: 'Cover снимка',
					directory: 'src/assets/images/posts',
					publicPath: '@assets/images/posts/',
				}),
				content: fields.markdoc({
					label: 'Съдържание',
					options: {
						image: {
							directory: 'src/assets/images/posts',
							publicPath: '@assets/images/posts/',
						},
					},
				}),
			},
		}),
	},
});
