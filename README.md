# lolstats-riotapi-redis

Riot API Wrapper with Redis caching

## Installation

```
npm install lolstats-riotapi-redis
```

## Usage

```javascript
const RiotApi = require('lolstats-riotapi-redis');

// redisConfig defaults to {host: '127.0.0.1', port: 6379}
const api = new RiotApi({
  apikey: 'XXXXX',
  redisConfig: {
    host: '127.0.0.1',
    port: 6379,
  },
});

api.summoner.byName('EUW', 'Lobo Bot')
  .then((data) => {
    console.log(data);
  });
```