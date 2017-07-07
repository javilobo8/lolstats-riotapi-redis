const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('MasteriesV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  describe('bySummonerId', () => {
    it('should return all summoner masteries', (done) => {
      api.masteries.bySummonerId('EUW', 40220583)
        .then((body) => {
          expect(body).to.be.an('object');
          done();
        });
    });
  });
});
