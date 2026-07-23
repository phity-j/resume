module.exports = function(eleventyConfig) {
  // Pass through css folder
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    pathPrefix: "/resume/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
