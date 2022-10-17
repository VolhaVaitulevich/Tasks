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
<<<<<<< HEAD
<<<<<<< HEAD
	overrides: [
		{
			files: ['*.ts', '*.tsx'],
			rules: {
				'@typescript-eslint/explicit-function-return-type': ['error'],
			},
		},
	],
=======
	overrides: [],
>>>>>>> 4722547 (Update eslint)
=======
	overrides: [
		{
			"files": ["*.ts", "*.tsx"],
			"rules": {				
				"@typescript-eslint/explicit-function-return-type": ["error"]
			}
		}
	],
>>>>>>> 9f53765 (Add explicit-function-return-type for .ts files)
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
<<<<<<< HEAD
<<<<<<< HEAD
		'@typescript-eslint/explicit-function-return-type': 'off',
=======
		'@typescript-eslint/explicit-function-return-type': 'error',
>>>>>>> 4722547 (Update eslint)
=======
		"@typescript-eslint/explicit-function-return-type": "off"
>>>>>>> 9f53765 (Add explicit-function-return-type for .ts files)
	},
};
