/**
 * 处理github返回的auth code
 */
const axios = require('axios');
const config = require('../config');

const { client_id, client_secret, request_token_url } = config.github;

module.exports = server => {
  server.use(async (ctx, next) => {
    if (ctx.path === '/auth') {
      const { code } = ctx.query;
      if (code) {
        const result = await axios({
          method: 'post',
          url: request_token_url,
          data: {
            client_id,
            client_secret,
            code,
          },
          headers: {
            // 接收到json数据
            Accept: 'application/json',
          },
        });

        // github可能会在status=200情况下返回error
        if (result.status === 200 && result.data && !result.data.error) {
          ctx.session.githubAuth = result.data;
          const { access_token, token_type } = result.data;

          const { data: userInfo } = await axios({
            method: 'get',
            url: 'https://api.github.com/user',
            // api网址发送请求时一定要带上headers
            headers: {
              Authorization: `${token_type} ${access_token}`,
            },
          });

          ctx.session.userInfo = userInfo;
          ctx.redirect((ctx.session && ctx.session.urlBeforeOAuth) || '/');
          ctx.session.urlBeforeOAuth = '';
        } else {
          ctx.body = `request token failed ${result.data && result.data.error}`;
        }
      } else {
        ctx.body = `code not exist`;
      }
    } else {
      await next();
    }
  });

  // logout
  server.use(async (ctx, next) => {
    const { path, method } = ctx;
    if (path === '/logout' && method === 'POST') {
      ctx.session = null;
      ctx.body = 'logout seccess';
    } else {
      await next();
    }
  });

  // 进行auth之前，存储请求时的页面url
  server.use(async (ctx, next) => {
    const { path, method } = ctx;
    if (path === '/prepare-auth' && method === 'GET') {
      const { url } = ctx.query;
      ctx.session.urlBeforeOAuth = url;
      ctx.redirect(config.OAUTH_URL);
    } else {
      await next();
    }
  });
};
