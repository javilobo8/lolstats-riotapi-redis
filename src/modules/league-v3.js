const {getServer} = require('../regional-endpoints');

class LeagueV3 {

  /**
   * Creates an instance of LeagueV3.
   * @param {function} request
   * @param {number} expiration
   *
   * @memberof LeagueV3
   */
  constructor(request, expiration) {
    this.request = request;
    this.expiration = expiration;
  }

  /**
   * Get all league positions from a summoner
   *
   * @param {string} region
   * @param {number} summonerId
   * @returns {Promise}
   *
   * @memberof LeagueV3
   */
  getPositions(region, summonerId) {
    const server = getServer(region);
    const uri = `https://${server.host}/lol/league/v3/positions/by-summoner/${summonerId}`;
    return this.request(uri, this.expiration);
  }
}

module.exports = LeagueV3;
