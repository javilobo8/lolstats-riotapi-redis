/* eslint-disable no-unused-expressions */
const {expect} = require('chai');
const {RiotApi, RiotApiErrors} = require('../');
const Promise = require('bluebird');

describe('lolstats-riotapi-redis', () => {
  it('should export RiotApi and RiotApiErrors', () => {
    expect(RiotApi).to.exist;
    expect(RiotApiErrors).to.exist;
  });
  describe('RiotApi', () => {
    it('should initialize correct with an api key', (done) => {
      const api = new RiotApi({apikey: process.env.APIKEY});
      expect(api).to.be.instanceof(RiotApi);
      done();
    });

    it('should throw an error if no api key', (done) => {
      try {
        // eslint-disable-next-line
        const api = new RiotApi({});
      } catch (err) {
        expect(err).to.be.instanceof(RiotApiErrors.EmptyApiKey);
        done();
      }
    });

    it('should return a Promise in askRiot', (done) => {
      const api = new RiotApi({apikey: process.env.APIKEY});
      const uri = 'https://euw1.api.riotgames.com/lol/status/v3/shard-data';
      const askRiot = api.askRiot(uri, 5000);
      expect(askRiot).to.be.instanceOf(Promise);
      done();
    });

    it('should throw an error if api fails', (done) => {
      const api = new RiotApi({apikey: process.env.APIKEY});
      const uri = 'https://eudddw1.api.riotgames.com/lol/status/v3/shard-data';
      const askRiot = api.askRiot(uri, 5000);
      Promise.resolve(askRiot)
        .catch((err) => {
          expect(err).to.be.instanceOf(Error);
          done();
        });
    });
  });
});
