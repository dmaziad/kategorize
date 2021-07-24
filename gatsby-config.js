require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'Kategorize',
		description:
			'Professional Organizer in New York City and Southern California.',
		url: 'https://www.kategorize.co', // No trailing slash allowed!
		image: '/kategorize-stacked-main-b0dd49635422d9a7464ce9f0146640d4.png', // Path to your image you placed in the 'static' folder
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-web-font-loader',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `kategorize`,
				short_name: `kategorize`,
				start_url: `/`,
				display: `standalone`,
				icon: `src/images/icon.png`,
			},
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-google-gtag`,
			options: {
				trackingIds: [
					process.env.GOOGLE_ANALYTICS_ID, // Google Analytics / GA
				],
			},
		},
	],
};
