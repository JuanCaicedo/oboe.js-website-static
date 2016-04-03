var chai = require('chai');
var expect = chai.expect;

var build = require('../build-static');

describe('sass', function() {

  describe('fileIsNotScss', function () {

    it('returns false if file is scss', function() {
      expect(build.fileIsNotScss({}, 'src/test.scss')).to.eql(false);
    });

    it('returns true if file is not scss', function() {
      expect(build.fileIsNotScss({}, 'src/test.md')).to.eql(true);
    });

    it('returns true if file is all.scss', function() {
      expect(build.fileIsNotScss({}, 'src/all.scss')).to.eql(true);
    });

  });

  describe('excludeScss', function() {

    it('excludes files that are scss', function() {

      const files = {
        'src/test.md': {},
        'src/test.scss': {},
        'src/test.js': {}
      };

      expect(build.excludeScss(files)).to.deep.eql({
        'src/test.md': {},
        'src/test.js': {}
      });

    });

  });

  describe('getListing', function() {

    it('reads listing as an array', function() {
      const files = {
        listing: {
          contents: "why.md\nexamples.md\napi.md\ndownload.md\ndiscuss.md\n"
        }
      };
      const expected = [
        'why.md',
        'examples.md',
        'api.md',
        'download.md',
        'discuss.md',
        ''
      ];
      expect(build.getListing(files)).to.deep.eql(expected);
    });

  });

  describe('formatPage', function() {

    it('converts strings to objects', function() {
      const listing = 'why.md';
      expect(build.formatPage(listing)).to.eql({
        title: 'why',
        path: 'why'
      });
    });

  });

  describe('addRoot', function() {

    it('adds root variable to all files', function() {
      const root = 'test';
      const files = [{
        'first': {}
      }];

      // Mutates files
      build.addRoot(root, files);

      expect(files[0]).to.have.property('root', 'test');
    });

  });
});
