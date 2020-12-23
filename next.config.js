const config = require('./config');
const { OAUTH_URL } = config;

module.exports = {
  distDir: 'dest',
  env: {
    customKey: 'testEnv',
    // 页面的任何地方能通过process.env.customKey拿到这个值，通用配置的时候使用
  },
  serverRuntimeConfig: {
    mySecret: 'secret',
    secondSecret: process.env.SECOND_SECRET,
  },
  // 在服务端渲染和客户端渲染都可以获取的配置
  publicRuntimeConfig: {
    OAUTH_URL,
  },
};
