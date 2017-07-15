const debug = require('debug')('RiotApi');
const debugRedis = require('debug')('RiotApi:redis');
const request = require('request');
const redis = require('redis');
const Promise = require('bluebird');

const {EmptyApiKey} = require('./riot-api.errors');
const cacheExp = require('./cache-exp');

const SummonerV3 = require('./modules/summoner-v3');
const LeagueV3 = require('./modules/league-v3');
const ChampionMasteryV3 = require('./modules/champion-mastery-v3');
const StaticDataV3 = require('./modules/static-data-v3');
const MasteriesV3 = require('./modules/masteries-v3');

Promise.promisifyAll(redis.RedisClient.prototype);
Promise.promisifyAll(redis.Multi.prototype);

class RiotApi {

  /**
   * Creates an instance of RiotApi.
   * @param {string} {apikey}
   *
   * @memberof RiotApi
   */
  constructor({apikey, redisConfig = {host: '127.0.0.1', port: 6379}}) {
    debug('init');

    if (!apikey) {
      throw new EmptyApiKey();
    }
    this.apikey = apikey;
    this.redisConfig = redisConfig;
    this.req = request.defaults({
      headers: {
        'X-Riot-Token': this.apikey,
      },
    });

    debugRedis('connecting to Redis');
    this.cache = redis.createClient(redisConfig);
    this.cache.on('ready', () => {
      debugRedis('connected to Redis');
    });

    this.summoner = new SummonerV3(
      this.handleRequest.bind(this), cacheExp.SUMMONER);
    this.league = new LeagueV3(
      this.handleRequest.bind(this), cacheExp.LEAGUE);
    this.championmastery = new ChampionMasteryV3(
      this.handleRequest.bind(this), cacheExp.CHAMPIONMASTERY);
    this.staticdata = new StaticDataV3(
      this.handleRequest.bind(this), cacheExp.STATICDATA);
    this.masteries = new MasteriesV3(
      this.handleRequest.bind(this), cacheExp.MASTERIES);
  }

  /**
   * Handle request
   *
   * @param {string} uri
   * @param {number} expiration
   * @returns {Promise}
   *
   * @memberof RiotApi
   */
  handleRequest(uri, expiration) {
    return this.cache.getAsync(uri)
      .then((res) => {
        if (res) {
          return JSON.parse(res);
        }
        return this.askRiot(uri, expiration);
      });
  }

  /**
   * Ask Riot
   *
   * @param {string} uri
   * @param {number} expiration
   * @returns {Promise}
   *
   * @memberof RiotApi
   */
  askRiot(uri, expiration) {
    console.log(`GET ${uri} => [${this.apikey}] => EXP: ${expiration}`);
    return new Promise((resolve, reject) => {
      this.req({uri}, (error, response, body) => {
        if (error) {
          reject(error);
          return;
        }
        if (response.statusCode !== 200) {
          reject(response);
        }
        this.cache.setexAsync(uri, expiration, body)
          .then(() => debugRedis(`saved ${uri}`))
          .then(() => JSON.parse(body))
          .then(resolve)
          .catch(reject);
      });
    });
  }
}

module.exports = RiotApi;
