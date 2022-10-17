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
			"files": ["*.ts", "*.tsx"],
			"rules": {				
				"@typescript-eslint/explicit-function-return-type": ["error"]
			}
		}
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
<<<<<<< HEAD
	plugins: [],
=======
	plugins: ['react', '@typescript-eslint'],
>>>>>>> 2fb7ef7 (Add eslint and prettier)
	rules: {
		indent: ['error', 'tab'],
		'linebreak-style': ['error', 'windows'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
<<<<<<< HEAD
		'@typescript-eslint/explicit-function-return-type': 'error',
=======
>>>>>>> 2fb7ef7 (Add eslint and prettier)
	},
};
