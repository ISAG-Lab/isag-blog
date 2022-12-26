import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '../config';

const blogImportResult = import.meta.glob('./blog/**/*.md', { eager: true });
const blogs = Object.values(blogImportResult);

export const get = () =>
	rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: import.meta.env.SITE,
		items: blogs.map((blog) => ({
			link: blog.url,
			title: blog.frontmatter.title,
			pubDate: blog.frontmatter.pubDate,
			description: blog.frontmatter.description,
			tag: blog.frontmatter.tag,
		}))
	});
