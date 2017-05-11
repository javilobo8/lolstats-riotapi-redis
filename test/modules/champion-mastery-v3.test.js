const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('ChampionMasteryV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  beforeEach((done) => setTimeout(done, 1500));

  describe('getAll', () => {
    it('should return all champion masteries', (done) => {
      api.championmastery.getAll('EUW', 40220583)
        .then((body) => {
          expect(body).to.be.an('array');
          done();
        });
    });
  });
});
