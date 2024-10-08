// eslint-disable-next-line no-undef
module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true,
      },
   },
   settings: {
      react: {
         version: 'detect',
      },
   },
   extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
   ],
   plugins: ['react', '@typescript-eslint', 'prettier'],
   rules: {
      'prettier/prettier': [
         'error',
         {
            semi: true,
            singleQuote: true,
            tabWidth: 3,
            trailingComma: 'all',
            printWidth: 80,
         },
      ],
      'react/react-in-jsx-scope': 'off', // Add this line to disable the rule
      'react/prop-types': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
   },
};
