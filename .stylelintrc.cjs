module.exports = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-html"
  ],
  overrides: [
    {
      files: ["*.astro", "*.html"],
      customSyntax: "postcss-html"
    }
  ],
  rules: {
    "color-hex-case": "lower",
    "string-quotes": "double",
  },
};
