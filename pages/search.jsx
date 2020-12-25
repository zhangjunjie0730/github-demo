import { withRouter } from 'next/router';
import initCache from '../utils/client-cache';
import { request } from '../utils/api';
import { LANGUAGES, SORT_TYPES } from '../config';

/**
 * search条件：
 * sort: 排序方式
 * order: 排序升降顺序
 * lang: 仓库开发主语言
 * page: 分页
 */

// const { cache, useCache } = initCache({
//   genCacheKeyStrate: context => genCacheKeyStrate(context.ctx.query),
// });

const Search = ({ router, repos }) => {
  console.log('search', repos);
  return (
    <>
      <span>{router.query.query}</span>
    </>
  );
};

Search.getInitialProps = async ({ ctx }) => {
  const { query, sort, lang, order = 'desc', page } = ctx.query;
  if (!query) return { repos: { total_count: 0 } };

  let queryString = `?q=${query}`;
  lang && (queryString += `+language:${lang}`);
  sort && (queryString += `&sort=${sort}&order=${order}`);
  page && (queryString += `&page=${page}`);

  const result = await request(
    {
      url: `/search/repositories${queryString}`,
    },
    ctx.req,
    ctx.res
  );
  return {
    repos: result.data,
  };
};

export default withRouter(Search);
