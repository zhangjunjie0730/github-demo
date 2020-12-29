import { withRouter } from 'next/router';
import { Row, Col, List, Pagination } from 'antd';
import initCache from '../utils/client-cache';
import { request } from '../utils/api';
import { LANGUAGES, SORT_TYPES, PER_PAGE } from '../config';
import FilterLink from '../components/FilterLink';
import Repo from '../components/Repo';
import { genCacheKeyByQuery } from '../utils';

/**
 * search条件：
 * sort: 排序方式
 * order: 排序升降顺序
 * lang: 仓库开发主语言
 * page: 分页
 */

const { cache, useCache } = initCache({
  genCacheKeyStrate: context => genCacheKeyByQuery(context.ctx.query),
});

const Search = ({ router, repos }) => {
  const { query } = router;
  const { sort, order, lang, page = 1 } = query;

  useCache(genCacheKeyByQuery(query), { repos });

  return (
    <div className="root">
      <Row gutter={20}>
        <Col span={6}>
          <List
            bordered
            style={{ marginBottom: 20 }}
            dataSource={LANGUAGES}
            header={<span className="list-header">语言</span>}
            renderItem={langItem => {
              const selected = lang === langItem;

              return (
                <List.Item className={selected ? 'selected' : null}>
                  <FilterLink {...router.query} selected={selected} lang={langItem}>
                    {langItem}
                  </FilterLink>
                </List.Item>
              );
            }}
          />
          <List
            bordered
            style={{ marginBottom: 20 }}
            dataSource={SORT_TYPES}
            header={<span className="list-header">排序</span>}
            renderItem={item => {
              let selected = false;
              // 1.当没有sort时，默认是BestMatch；2.有sort且有order(有默认值dest)时
              if (
                (item.name === 'Best Match' && !sort) ||
                (item.sort === sort && item.order === order)
              ) {
                selected = true;
              }
              return (
                <List.Item className={selected ? 'selected' : null}>
                  <FilterLink
                    {...router.query}
                    selected={selected}
                    sort={item.sort}
                    order={item.order}
                  >
                    {item.name}
                  </FilterLink>
                </List.Item>
              );
            }}
          />
        </Col>
        <Col span={18}>
          <h3 className="repos-title">{repos.total_count}个仓库</h3>
          {repos.items.map(repo => (
            <Repo repo={repo} key={repo.id} />
          ))}
          <div className="pagination">
            <Pagination
              pageSize={PER_PAGE}
              current={Number(page) || 1}
              // github api限制请求前1000条
              total={Math.min(repos.total_count, 1000)}
              // 我们用url来控制分页，所以不需要这个onChange，但是一定要传
              onChange={() => {}}
              itemRender={(renderPage, renderType, renderOl) => {
                const targetPage =
                  renderType === 'page' ? renderPage : renderType === 'prev' ? page - 1 : page + 1;

                const name = renderType === 'page' ? renderPage : renderOl;

                return (
                  <FilterLink {...router.query} page={targetPage}>
                    {name}
                  </FilterLink>
                );
              }}
            />
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          :global(.ant-list-item.selected) {
            border-left: 2px solid #e36209;
            font-weight: 100;
          }
          .root {
            padding: 20px 0;
          }
          .list-header {
            font-weight: 800;
            font-size: 16px;
          }
          .repos-title {
            border-bottom: 1px solid #eee;
            font-size: 24px;
            line-height: 50px;
          }
          .pagination {
            margin-top: 16px;
            text-align: right;
          }
        `}
      </style>
    </div>
  );
};

Search.getInitialProps = cache(async ({ ctx }) => {
  const { query, sort, lang, order = 'desc', page } = ctx.query;
  if (!query) return { repos: { total_count: 0 } };

  // ?q=react+language:javascript&sort=stars&order=desc&page=2
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
});

export default withRouter(Search);
