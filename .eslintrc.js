// https://vuejs.github.io/eslint-plugin-vue/

module.exports = {
  extends: ['plugin:vue/recommended'],
  rules: {
    'vue/attributes-order': 'off',
    'vue/html-indent': ["warn", 4],
    "vue/name-property-casing": ["error", "kebab-case"],
    "vue/require-default-prop": false,
    "vue/max-attributes-per-line": ["error", {
      "singleline": 5,
      "multiline": {
        "max": 1,
        "allowFirstLine": true
      }
    }],
    "vue/html-closing-bracket-newline": ["error", {
      "singleline": "never",
      "multiline": "never"
    }]
  }
}
