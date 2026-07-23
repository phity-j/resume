module.exports = function(eleventyConfig) {
  // Pass through css folder and images
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  return {
    pathPrefix: "/resume/",
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes"
    }
  };
};
