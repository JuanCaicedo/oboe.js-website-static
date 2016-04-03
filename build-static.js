const R = require('ramda');
const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const collections = require('metalsmith-collections');
const layouts = require('metalsmith-layouts');
const sass = require('metalsmith-sass');

/* Sass processing functions */
const isScss = R.contains('.scss');
const isAll = R.contains('all.scss');

const fileIsNotScss = function(contents, name) {
  return isAll(name) || !isScss(name);
};

const excludeScss = function(files) {
  return R.pickBy(fileIsNotScss, files);
};

function main(){
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
    .use(function(files) {
      const filesToKeep = excludeScss(files);
      const filesToRemove = R.omit(R.keys(filesToKeep), files);
      const removeFile = function(name) {
        delete files[name];
      };
      R.map(removeFile, R.keys(filesToRemove));
    })
    .use(sass({
      outputDir: 'css/'
    }))
    .destination('./gh-pages')
    .use(permalinks({
      pattern: ':page'
    }))
    .build(function(err) {
      if (err) console.log(err);
    });
}

if (require.main === module) {
  main();
}

module.exports = {
  fileIsNotScss: fileIsNotScss,
  excludeScss: excludeScss
};
