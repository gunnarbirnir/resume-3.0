module.exports = {
  plugins: [
    require("autoprefixer"),
    require("cssnano"),
    require("@csstools/postcss-global-data")({
      files: ["src/styles/media-queries.css"],
    }),
    require("postcss-custom-media"),
  ],
};
