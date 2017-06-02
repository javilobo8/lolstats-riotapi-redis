const {getServer} = require('../regional-endpoints');
const queryString = require('query-string');

class StaticDataV3 {

  /**
   * Creates an instance of StaticDataV3.
   * @param {function} request
   * @param {number} expiration
   *
   * @memberof StaticDataV3
   */
  constructor(request, expiration) {
    this.request = request;
    this.expiration = expiration;
  }

  /**
   * Get all champions
   *
   * @param {string} region
   * @param {object} options
   * @returns {Promise}
   *
   * @memberof StaticDataV3
   */
  champions(region, options = {champListData: 'image', dataById: true}) {
    const query = queryString.stringify(options, {encode: true});
    const server = getServer(region);
    const uri = `https://${server.host}/lol/static-data/v3/champions?${query}`;
    return this.request(uri, this.expiration);
  }
}

module.exports = StaticDataV3;
