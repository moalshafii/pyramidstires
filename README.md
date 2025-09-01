module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["astro", "html", "json", "markdown"],
  extends: [
    "eslint:recommended",
    "plugin:astro/recommended",
    "plugin:json/recommended",
    "plugin:markdown/recommended",
    "prettier",
  ],
  overrides: [
    {
      files: ["*.astro"],
      parser: "astro-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        extraFileExtensions: [".astro"],
      },
    },
    {
      files: ["*.md"],
      processor: "markdown/markdown",
    },
  ],
};
