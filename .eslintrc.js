module.exports = {
   ignorePatterns: ['!.*', 'build', 'node_modules'],
   env: {
     browser: true,
     amd: true,
     node: true,
     es2021: true,
   },
   settings: {
     react: {
       version: 'detect',
     },
   },
   extends: ['plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:import/errors', 'plugin:import/warnings', 'plugin:jsx-a11y/recommended', 'plugin:eslint-comments/recommended', 'plugin:storybook/recommended', 'plugin:storybook/recommended'],
   parserOptions: {
     ecmaVersion: 2020,
     sourceType: 'module',
   },
   plugins: ['react', 'unused-imports'],
   rules: {
     'unused-imports/no-unused-imports': 'warn',
     'no-console': 'warn',
     'react/react-in-jsx-scope': 'off',
     'react/jsx-uses-react': 'off',
     'react/prop-types': 'off',
     'react/jsx-key': 'error',
     'sort-imports': 'off',
     'import/no-unresolved': 'off',
   },
 };