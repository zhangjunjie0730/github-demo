import moment from 'moment';

export const getTimeFromNow = time => {
  return moment(time).fromNow();
};

export const genDetailCacheKey = ctx => {
  const { query, pathname } = ctx;
  const { owner, name } = query;
  return `${pathname}-${owner}-${name}`;
};

export const genDetailCacheKeyStrate = context => {
  const { ctx } = context;
  return genDetailCacheKey(ctx);
};

export const genCacheKeyByQuery = query => {
  return Object.keys(query).reduce((prev, curr) => {
    prev += query[curr];
    return prev;
  }, '');
};
