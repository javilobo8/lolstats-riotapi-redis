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

/**
 * SummonerNameNotFound
 *
 * @class SummonerNameNotFound
 * @extends {Error}
 */
class SummonerNameNotFound extends Error {
  constructor() {
    super('SummonerName not found');
    this.name = this.constructor.name;
  }
}

/**
 * SummonerIdNotFound
 *
 * @class SummonerIdNotFound
 * @extends {Error}
 */
class SummonerIdNotFound extends Error {
  constructor() {
    super('SummonerId not found');
    this.name = this.constructor.name;
  }
}

module.exports = {
  EmptyApiKey,
  RegionNotFound,
  SummonerNameNotFound,
  SummonerIdNotFound,
};
