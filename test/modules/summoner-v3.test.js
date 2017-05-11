const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('SummonerV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  beforeEach((done) => setTimeout(done, 1500));

  describe('byName', () => {
    it('should return summoner object', (done) => {
      api.summoner.byName('EUW', 'Lobo Bot')
        .then((body) => {
          expect(body).to.be.an('object');
          done();
        });
    });
  });

  describe('byAccountId', () => {
    it('should return summoner object', (done) => {
      api.summoner.byAccountId('EUW', 42457154)
        .then((body) => {
          expect(body).to.be.an('object');
          done();
        });
    });
  });
});
