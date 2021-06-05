module.exports = {
	siteMetadata: {
		title: 'Kategorize',
	},
	plugins: [
		'gatsby-plugin-gatsby-cloud',
		'gatsby-plugin-image',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sitemap',
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
	],
};
