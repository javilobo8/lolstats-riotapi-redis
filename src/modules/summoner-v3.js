const {getServer} = require('../regional-endpoints');

class SummonerV3 {

  /**
   * Creates an instance of SummonerV3.
   * @param {function} request
   * @param {seconds} expiration
   *
   * @memberof SummonerV3
   */
  constructor(request, expiration) {
    this.request = request;
    this.expiration = expiration;
  }

  /**
   * Get summoner by name
   *
   * @param {string} region
   * @param {string} summonerName
   * @returns {Promise}
   *
   * @memberof SummonerV3
   */
  byName(region, summonerName) {
    const _summonerName = encodeURIComponent(String(summonerName).toLowerCase().replace(/\s/g, ''));
    const server = getServer(region);
    const uri = `https://${server.host}/lol/summoner/v3/summoners/by-name/${_summonerName}`;
    return this.request(uri, this.expiration);
  }

  /**
   * Get summoner by accountId
   *
   * @param {string} region
   * @param {number} accountId
   * @returns {Promise}
   *
   * @memberof SummonerV3
   */
  byAccountId(region, accountId) {
    const server = getServer(region);
    const uri = `https://${server.host}/lol/summoner/v3/summoners/by-account/${accountId}`;
    return this.request(uri, this.expiration);
  }
}

module.exports = SummonerV3;
