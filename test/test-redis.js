const Redis = require('ioredis');

const redis = new Redis({
  port: 6378,
  password: 123456,
});

async function test() {
  const keys = await redis.keys('*');
  console.log(keys);
  console.log(await redis.set('lala', 23));
}
test();
