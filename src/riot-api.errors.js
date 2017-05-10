/**
 * EmptyApiKey
 *
 * @class EmptyApiKey
 * @extends {Error}
 */
class EmptyApiKey extends Error {
  constructor(msg) {
    super(msg || 'No Api Key specified when create new RiotApi');
    this.name = this.constructor.name;
  }
}

/**
 * RegionNotFound
 *
 * @class RegionNotFound
 * @extends {Error}
 */
class RegionNotFound extends Error {
  constructor(msg) {
    super(`${msg} does not exist`);
    this.name = this.constructor.name;
  }
}

module.exports = {
  EmptyApiKey,
  RegionNotFound,
};
