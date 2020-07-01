/* eslint-env mocha */
/* eslint-disable no-unused-expressions */
const chai = require('chai');
const expect = chai.expect;
const isNullOrUndefined = require('./../index');

describe('Unit tests', () => {
  describe('Is Null Or Undefined', () => {
    it('No arg', async () => {
      expect(isNullOrUndefined()).to.be.false;
    });

    it('No NULL , No Undefined', async () => {
      expect(isNullOrUndefined({})).to.be.false;

      expect(isNullOrUndefined('1')).to.be.false;

      expect(isNullOrUndefined(1)).to.be.false;

      expect(isNullOrUndefined({}, '1')).to.be.false;

      expect(isNullOrUndefined({}, '1', 2)).to.be.false;

      expect(isNullOrUndefined({}, '1', 2, {})).to.be.false;

      expect(isNullOrUndefined({ someInt: 123 })).to.be.false;

      expect(isNullOrUndefined({ some: null })).to.be.false;

      expect(isNullOrUndefined({ some: undefined })).to.be.false;
    });

    it('One argument - NULL', async () => {
      expect(isNullOrUndefined(null)).to.be.true;
    });

    it('One argument - Undefined', async () => {
      expect(isNullOrUndefined(undefined)).to.be.true;
    });

    it('Two arguments - NULL', async () => {
      expect(isNullOrUndefined(null, null)).to.be.true;
    });

    it('Two arguments - Undefined', async () => {
      expect(isNullOrUndefined(undefined, undefined)).to.be.true;
    });

    it('Combination - NULL Undefined', async () => {
      expect(isNullOrUndefined(undefined, null)).to.be.true;
      expect(isNullOrUndefined(null, undefined)).to.be.true;
    });

    it('Multiple arguments, at least one is NULL or Undefined', async () => {
      expect(isNullOrUndefined({}, '1', undefined)).to.be.true;

      expect(isNullOrUndefined({}, '1', null)).to.be.true;

      expect(isNullOrUndefined({}, '1', undefined, {})).to.be.true;

      expect(isNullOrUndefined({}, '1', {}, {}, 1, 2, 3, 4, 5, 6, 7, 8, 9, null)).to.be.true;

      expect(isNullOrUndefined({}, '1', {}, {}, 1, 2, 3, 4, undefined, 6, 7, 8, 9, 10, null)).to.be.true;
    });
  });
});
