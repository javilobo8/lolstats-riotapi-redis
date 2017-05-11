const {expect} = require('chai');
const {RiotApi} = require('../../');

describe('StaticDataV3', () => {
  const api = new RiotApi({apikey: process.env.APIKEY});

  beforeEach((done) => setTimeout(done, 1500));

  describe('champions', () => {
    it('should return all champions', (done) => {
      const options = {
        champListData: 'altimages',
        dataById: true,
      };
      api.staticdata.champions('EUW', options)
        .then((body) => {
          expect(body).to.be.an('object');
          done();
        });
    });
  });
});
