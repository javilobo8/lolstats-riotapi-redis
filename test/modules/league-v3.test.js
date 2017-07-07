const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('LeagueV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  describe('getPositions', () => {
    it('should return leagues array', (done) => {
      api.league.getPositions('EUW', 40220583)
        .then((body) => {
          expect(body).to.be.an('array');
          done();
        });
    });
  });
});
