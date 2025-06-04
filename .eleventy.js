module.exports = (eleventyConfig) => {
  // výchozí výstupní složka je: _site

  // zkopírovat images/ do _site/images
  eleventyConfig.addPassthroughCopy('img');

  // zkopírovat css/ do _site/css/
  eleventyConfig.addPassthroughCopy('css');

  return {
    // možné formáty šablon
    templateFormats: ['njk', 'html', 'md', 'liquid'],

    // jako šablonovací jazyk zvolíme Nunjucks
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
  };
};
