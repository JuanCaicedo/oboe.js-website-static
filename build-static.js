const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');

Metalsmith(__dirname)
  .source('./src')
  .use(collections({
    pages: {
      pattern: 'pages/*.md'
    }
  }))
  .use(markdown())
  .destination('./gh-pages')
  .use(permalinks({
    pattern: ':page'
  }))
  .build(function(err) {
    if (err) console.log(err);
  });
