const Router = require('koa-router');

const router = new Router();

router.get('/a/:id', async ctx => {
  const { id } = ctx.params;
  await handle(ctx.req, ctx.res, {
    pathname: '/a',
    query: {
      id,
    },
  });
  ctx.respond = false;
});

router.get('/api/user/info', async ctx => {
  const { userInfo } = ctx.session;
  if (userInfo) {
    ctx.body = userInfo;
    // 设置头部 返回json
    ctx.set('Content-Type', 'application/json');
  } else {
    ctx.status = 401;
    ctx.body = 'Need Login';
  }
});

module.exports = server => {
  server.use(router.routes());
};
