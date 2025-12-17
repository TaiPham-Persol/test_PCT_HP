module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: ['@nuxtjs/eslint-config-typescript', 'airbnb-base', 'prettier'],
  plugins: ['no-null', 'prettier', 'import'],
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', '.'],
          ['~', '.']
        ],
        extensions: ['.js', '.vue', '.ts']
      }
    }
  },
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'quotes': ['warn', 'single'],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        vue: 'always',
        ts: 'never'
      }
    ],
  },
  overrides: [
    {
      files: ['nuxt.config.ts', 'plugins/*.ts', '**/*.d.ts'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['*.vue'],
      rules: {
        'import/no-default-export': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        'vue/multiline-html-element-content-newline': 'off',
        'vue/html-self-closing': 'off',
        'vue/max-attributes-per-line': 'off',
        'prettier/prettier': 'error',
        'vue/no-v-text-v-html-on-component': 'warn'
      },
    },
  ],
};
