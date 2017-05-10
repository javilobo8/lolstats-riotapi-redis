const {RegionNotFound} = require('./riot-api.errors');

const servers = [
  {region: 'BR', platformId: 'BR1', host: 'br1.api.riotgames.com'},
  {region: 'EUNE', platformId: 'EUN1', host: 'eun1.api.riotgames.com'},
  {region: 'EUW', platformId: 'EUW1', host: 'euw1.api.riotgames.com'},
  {region: 'JP', platformId: 'JP1', host: 'jp1.api.riotgames.com'},
  {region: 'KR', platformId: 'KR', host: 'kr.api.riotgames.com'},
  {region: 'LAN', platformId: 'LA1', host: 'la1.api.riotgames.com'},
  {region: 'LAS', platformId: 'LA2', host: 'la2.api.riotgames.com'},
  {region: 'NA', platformId: 'NA1', host: 'na1.api.riotgames.com'},
  {region: 'OCE', platformId: 'OC1', host: 'oc1.api.riotgames.com'},
  {region: 'TR', platformId: 'TR1', host: 'tr1.api.riotgames.com'},
  {region: 'RU', platformId: 'RU', host: 'ru.api.riotgames.com'},
];

/**
 * Get server by region
 *
 * @param {string} region
 * @returns {object}
 */
function getServer(region) {
  const server = servers.find((item) => item.region === region);
  if (!server) throw new RegionNotFound(region);
  return server;
}

exports.servers = servers;
exports.getServer = getServer;
