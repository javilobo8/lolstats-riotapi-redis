const {getServer} = require('../regional-endpoints');

class ChampionMasteryV3 {

  /**
   * Creates an instance of ChampionMasteryV3.
   * @param {function} request
   * @param {number} expiration
   *
   * @memberof ChampionMasteryV3
   */
  constructor(request, expiration) {
    this.request = request;
    this.expiration = expiration;
  }

  /**
   * Get all champions
   *
   * @param {string} region
   * @param {number} summonerId
   * @returns {Promise}
   *
   * @memberof ChampionMasteryV3
   */
  getAll(region, summonerId) {
    const server = getServer(region);
    const uri = `https://${server.host}/lol/champion-mastery/v3/champion-masteries/by-summoner/${summonerId}`;
    return this.request(uri, this.expiration);
  }
}

module.exports = ChampionMasteryV3;
