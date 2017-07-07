const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('StaticDataV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  describe('champions', () => {
    it('should return all champions', (done) => {
      api.staticdata.champions('EUW')
        .then((body) => {
          expect(body).to.be.an('object');
          done();
        });
    });
  });
});
