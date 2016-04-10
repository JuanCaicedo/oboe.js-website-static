const R = require('ramda');
const cheerio = require('cheerio');
const Metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const permalinks = require('metalsmith-permalinks');
const registerHelpers = require('metalsmith-register-helpers');
const inPlace = require('metalsmith-in-place');
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

const removeSassExceptAll = function(files) {
  const filesToKeep = excludeScss(files);
  const filesToRemove = R.omit(R.keys(filesToKeep), files);
  const removeFile = function(name) {
    delete files[name];
  };
  R.forEach(removeFile, R.keys(filesToRemove));
};

/* navbar functions */
const addPropertyToFile = R.curry(function(propertyName, property, files, name) {
  files[name][propertyName] = property;
});

const getListing = function(files) {
  const listing = files.listing.contents.toString();
  delete files.listing;
  return R.split('\n', listing);
};

const formatPage = function(listing) {
  const title = R.replace('.md', '', listing);
  return {
    title: title,
    path: title
  };
};

const addPages = function(files) {
  const listing = getListing(files);
  const pages = R.map(formatPage, listing);
  const names = R.keys(files);
  R.forEach(addPropertyToFile('pages', pages, files), names);
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
  getListing: getListing,
  formatPage: formatPage,
  addHeading: addHeading,
  addSections: addSections
};
