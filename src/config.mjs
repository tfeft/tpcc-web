export const SITE = {
	name: 'The Parallel Cinema Club',

	origin: 'https://theparallelcinema.club',
	basePathname: '/',
	trailingSlash: false,

	title: 'Weekly Film Screenings & Online Discussions in Bangalore',
	description: 'A community-run film society based out of Bangalore who meet up once a week to discuss the reel world, auteurs and themes, and occasionally host guest lectures.',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: 'blog', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	author: {
		disabled: false,
		pathname: 'author', // set empty to change from /author/some-author to /some-author
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
