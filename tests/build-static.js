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

});
