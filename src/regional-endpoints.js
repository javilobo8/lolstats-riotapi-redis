const {RegionNotFound} = require('./riot-api.errors');

const servers = [
  ['BR', 'BR1', 'br1.api.riotgames.com'],
  ['EUNE', 'EUN1', 'eun1.api.riotgames.com'],
  ['EUW', 'EUW1', 'euw1.api.riotgames.com'],
  ['JP', 'JP1', 'jp1.api.riotgames.com'],
  ['KR', 'KR', 'kr.api.riotgames.com'],
  ['LAN', 'LA1', 'la1.api.riotgames.com'],
  ['LAS', 'LA2', 'la2.api.riotgames.com'],
  ['NA', 'NA1', 'na1.api.riotgames.com'],
  ['OCE', 'OC1', 'oc1.api.riotgames.com'],
  ['TR', 'TR1', 'tr1.api.riotgames.com'],
  ['RU', 'RU', 'ru.api.riotgames.com'],
];

/**
 * Get server by region
 *
 * @param {string} region
 * @returns {object}
 */
function getServer(regionId) {
  const server = servers.find(([region]) => region === regionId);

  if (!server) {
    throw new RegionNotFound(regionId);
  }

  const [region, platformId, host] = server;

  return {
    region,
    platformId,
    host,
  };
}

exports.servers = servers;
exports.getServer = getServer;
