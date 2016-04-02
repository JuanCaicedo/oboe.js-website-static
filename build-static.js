const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');

Metalsmith(__dirname)
  .source('./content')
  .use(markdown())
  .destination('./pages')
  .build(function(err) {
    if (err) console.log(err);
  });
