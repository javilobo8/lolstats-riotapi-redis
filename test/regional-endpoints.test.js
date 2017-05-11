const {expect} = require('chai');
const {getServer} = require('../src/regional-endpoints');
const {RiotApiErrors} = require('../');

describe('Regional Endpoints', () => {
  describe('getServer', () => {
    const region = 'EUW';
    const expected = {
      region: 'EUW',
      platformId: 'EUW1',
      host: 'euw1.api.riotgames.com',
    };

    it('should return correct server', (done) => {
      const srv = getServer(region);
      expect(srv).to.deep.equal(expected);
      done();
    });

    it('should throw an error if not found', (done) => {
      try {
        // eslint-disable-next-line
        const srv = getServer('abcde');
      } catch (err) {
        expect(err).to.be.instanceOf(RiotApiErrors.RegionNotFound);
        done();
      }
    });
  });
});
