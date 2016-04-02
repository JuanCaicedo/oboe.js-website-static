const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');

Metalsmith(__dirname)
  .source('./src')
  .use(collections({
    pages: {
      pattern: 'pages/*.md'
    }
  }))
  .use(markdown())
  .use(layouts({
    engine: 'handlebars'
  }))
  .destination('./gh-pages')
  .use(permalinks({
    pattern: ':page'
  }))
  .build(function(err) {
    if (err) console.log(err);
  });
