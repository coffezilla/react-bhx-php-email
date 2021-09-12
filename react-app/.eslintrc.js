module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		indent: [2, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'react/jsx-indent': [1, 'tab'],
		'react/jsx-indent-props': [2, 0],
		'no-tabs': 0,
		'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
		'no-use-before-define': 'off',
		'jsx-quotes': [2, 'prefer-double'],
		'react/jsx-props-no-spreading': ['off'],
		'comma-dangle': [
			'error',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'always-multiline',
				exports: 'always-multiline',
				functions: 'ignore',
			},
		],
		'linebreak-style': 0,
		'no-console': 0,
		'no-alert': 0,
		'arrow-body-style': 0,
		'import/no-extraneous-dependencies': [
			'off',
			{
				devDependencies: false,
				optionalDependencies: false,
				peerDependencies: false,
				packageDir: './',
			},
		],
		'import/extensions': 'off', // allow every code in every extension
		'operator-linebreak': ['error', 'before'],
		'import/no-unresolved': 'off', // typescript erro importing .tsx files
		'react/require-default-props': 'off', // typescript allow ? props
		'object-curly-newline': 'off', // sometimes prettier dont break the line and it's not really a problem
		'react/react-in-jsx-scope': 'off',
		'@typescript-eslint/no-use-before-define': ['error'],
		'react/no-unescaped-entities': ['off'], // error using " and ' inside html content
	},
};
