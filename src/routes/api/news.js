import { XMLParser } from 'fast-xml-parser';

export async function get() {
	const parser = new XMLParser();

	const newsResponse = await fetch('https://github.blog/feed/');
	const newsText = await newsResponse.text();
	const newsJSON = parser.parse(newsText);

	if (newsResponse.ok) {
		return {
			body: newsJSON.rss.channel.item.map((item) => {
				return {
					id: item['post-id'],
					title: item['title'],
					description: item['description'],
					link: item['link']
				};
			})
		};
	}
}
