module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'plugin:nuxt/recommended',
		'prettier',
	],
	plugins: [],
	// add your custom rules here
	rules: {
		'vue/first-attribute-linebreak': 0,
		'vue/multi-word-component-names': 0
	},
}
