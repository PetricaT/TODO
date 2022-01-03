module.exports = {
	globDirectory: 'Calendar/',
	globPatterns: [
		'**/*.{png,ico,html,js,webmanifest,css}'
	],
	swDest: 'Calendar/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};