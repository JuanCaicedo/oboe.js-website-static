const R = require('ramda');
const cheerio = require('cheerio');
const Metalsmith = require('metalsmith');
const markdown = require('./metalsmith-plugins/supermarked');
const concat = require('metalsmith-concat');
const permalinks = require('metalsmith-permalinks');
const registerHelpers = require('metalsmith-register-helpers');
const inPlace = require('metalsmith-in-place');
const layouts = require('metalsmith-layouts');
const sass = require('metalsmith-sass');

const ROOT = 'http://localhost:8080';

/* Sass processing functions */
const isScss = R.contains('.scss');
const isAll = R.contains('all.scss');

const fileIsNotScss = function(contents, name) {
  return isAll(name) || !isScss(name);
};

const excludeScss = function(files) {
  return R.pickBy(fileIsNotScss, files);
};

const removeSassExceptAll = function(files) {
  const filesToKeep = excludeScss(files);
  const filesToRemove = R.omit(R.keys(filesToKeep), files);
  const removeFile = function(name) {
    delete files[name];
  };
  R.forEach(removeFile, R.keys(filesToRemove));
};

/* navbar functions */
const addPropertyToFile = R.curry(function(property, root, files, name) {
  files[name][property] = root;
});

const addRoot = R.curry(function(root, files) {
  var names = R.keys(files);
  R.forEach(addPropertyToFile('root', root, files), names);
});

const addPages = function(files) {
  const json = files['listing.json'].contents.toString();
  const listing = JSON.parse(json);
  delete files['listing.json'];
  const names = R.keys(files);
  R.forEach(addPropertyToFile('pages', listing, files), names);
};

/* sidebar functions */
const addHeading = function(files) {
  R.mapObjIndexed(function(file, name) {
    // only process html files
    if(!R.contains('.html', name)) {
      return;
    };
    $ = cheerio.load(file.contents);
    const headingEle = $('h1').first();
    const heading = {
      text: headingEle.text(),
      id:   headingEle.attr('id')
    };

    headingEle.remove();

    file.heading = heading;
    file.contents = new Buffer($.html().toString('binary'), 'binary');
  }, files);
};

const addSections = function(files) {
  R.mapObjIndexed(function(file, name) {
    // only process html files
    if(!R.contains('.html', name)) {
      return;
    };
    $ = cheerio.load(file.contents);
    const $headings = $('h2');
    const sections = $headings.map(function(i, heading) {
      return {
        text: $(heading).text(),
        id:   $(heading).attr('id')
      };
    });

    file.sections = sections;
    file.multipleSections = sections.length > 1;

  }, files);
};

function main(){
  Metalsmith(__dirname)
    .source('./src')
    .use(registerHelpers({
      directory: './helpers'
    }))
    .use(inPlace({
      engine: 'handlebars',
      partials: './partials'
    }))
    .use(markdown())
    .use(concat({
      files: require('./sourceList.js'),
      output: 'js/app.js'
    }))
    .use(addRoot(ROOT))
    .use(addPages)
    .use(addHeading)
    .use(addSections)
    .use(layouts({
      engine: 'handlebars'
    }))
    .use(removeSassExceptAll)
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
  excludeScss: excludeScss,
  addRoot: addRoot,
  addHeading: addHeading,
  addSections: addSections
};
