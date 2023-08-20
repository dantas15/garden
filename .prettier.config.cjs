module.exports = {
  plugins: [
    require.resolve(
      "prettier-plugin-astro",
      "prettier-plugin-tailwindcss",
      "prettier-config-standard",
    ),
  ],
  pluginSearchDirs: [__dirname],
  tailwindConfig: "./tailwind.config.js",
  overrides: [
    {
      files: "**/*.astro",
      options: { parser: "astro" },
    },
  ],
};
