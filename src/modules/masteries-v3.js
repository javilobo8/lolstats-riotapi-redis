const {getServer} = require('../regional-endpoints');

class MasteriesV3 {

  /**
   * Creates an instance of MasteriesV3.
   * @param {function} request
   * @param {number} expiration
   *
   * @memberof MasteriesV3
   */
  constructor(request, expiration) {
    this.request = request;
    this.expiration = expiration;
  }

  /**
   * Get masteries
   *
   * @param {string} region
   * @param {number} summonerId
   * @returns {Promise}
   *
   * @memberof MasteriesV3
   */
  bySummonerId(region, summonerId) {
    const server = getServer(region);
    const uri = `https://${server.host}/lol/platform/v3/masteries/by-summoner/${summonerId}`;
    return this.request(uri, this.expiration);
  }
}

module.exports = MasteriesV3;
