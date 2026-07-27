import { config, fields, collection } from '@keystatic/core';

export default config({
	storage: {
		kind: 'local',
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
				content: fields.markdoc({ label: 'Съдържание' }),
			},
		}),
	},
});
