module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier',
	],
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': ['error'],
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [],
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'@typescript-eslint/explicit-function-return-type': 'off',
	},
};
