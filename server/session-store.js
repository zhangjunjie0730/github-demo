// 加上前缀
function getRedisSessionId(sessionId) {
  return `githubdemossid:${sessionId}`;
}

class RedisSessionStore {
  constructor(client) {
    this.client = client;
  }

  // 获取redis中存储的session数据
  async get(sessionId) {
    const id = getRedisSessionId(sessionId);
    const data = await this.client.get(id);
    if (!data) return null;
    try {
      const result = JSON.parse(data);
      return result;
    } catch (err) {
      console.error('error:', err);
    }
  }

  // 在redis中存储session数据
  async set(sessionId, session, ttl /* 过期时间 */) {
    const id = getRedisSessionId(sessionId);
    let ttlSecond;
    if (typeof ttl === 'number') ttlSecond = Math.ceil(ttl / 1000); // 毫秒转秒
    try {
      const sessionStr = JSON.stringify(session);
      if (ttl) {
        await this.client.setex(id, ttlSecond, sessionStr);
      } else {
        await this.client.set(id, sessionStr);
      }
    } catch (err) {
      console.err('error:', err);
    }
  }

  // 删除某个session
  async destroy(sessionId) {
    const id = getRedisSessionId(sessionId);
    await this.client.del(id);
  }
}

module.exports = RedisSessionStore;
