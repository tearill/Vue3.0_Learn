module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true
	},
	'extends': [
		'eslint:recommended',
		'plugin:vue/essential',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended'
	],
	'parserOptions': {
		'ecmaVersion': 12,
		'parser': '@typescript-eslint/parser',
		'sourceType': 'module'
	},
	'plugins': [
		'vue',
		'@typescript-eslint'
	],
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		],
		'@typescript-eslint/camelcase': [
			'error',
			'off'
		],
        '@typescript-eslint/no-use-before-define': [
			'error',
			'off'
		],
        '@typescript-eslint/array-type': [
			'error',
			'off'
		],
        'init-declarations': 'error',
        'no-var': 'error',
        'no-console': 'error'
	}
};
