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
	rules: {
		'vue/no-v-html': 0,
		'vue/first-attribute-linebreak': 0,
		'vue/multi-word-component-names': 0
	},
}
