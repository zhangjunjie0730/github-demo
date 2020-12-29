import { Button, Select, Spin } from 'antd';
import { useRouter } from 'next/router';
import { useState } from 'react';
import IssueItem from '../../components/IssueItem';
import SearchUser from '../../components/SearchUser';
import { genDetailCacheKey, genDetailCacheKeyStrate } from '../../utils';
import { request } from '../../utils/api';
import initClientCache from '../../utils/client-cache';

function makeQuery(creator, state, labels) {
  const creatorStr = creator ? `creator=${creator}` : '';
  const stateStr = state ? `state=${state}` : '';
  let labelStr = '';
  if (labels && labels.length > 0) labelStr = `labels=${labels.join(',')}`;

  const arr = [];

  if (creatorStr) arr.push(creatorStr);
  if (stateStr) arr.push(stateStr);
  if (labelStr) arr.push(labelStr);

  return `?${arr.join('&')}`;
}

const { cache, useCache } = initClientCache({
  genCacheKeyStrate: context => genDetailCacheKeyStrate(context),
});

const Issues = ({ services }) => {
  const router = useRouter();
  const { owner, name } = router.query;
  useCache(genDetailCacheKey(router, { services }));

  const { initIssues, labels } = services;

  const [creator, setCreator] = useState();
  const [issueState, setIssueState] = useState();
  const [selectedLabels, setSelectedLabels] = useState([]);
  const [issues, setIssues] = useState(initIssues);
  const [fetching, setFetching] = useState(false);
  const handleLabelsChange = selected => setSelectedLabels(selected);

  const handleSearch = async () => {
    setFetching(true);
    const { data: searchIssues } = await request({
      url: `/repos/${owner}/${name}/issues${makeQuery(creator, issueState, selectedLabels)}`,
    });
    setIssues(searchIssues);
    setFetching(false);
  };

  const selectCommonStyle = {
    alignSelf: 'flex-start',
    width: 200,
    marginLeft: 20,
  };

  return (
    <div className="root">
      {fetching ? (
        <div className="spin">
          <Spin />
        </div>
      ) : null}
      <div className="search">
        {/* 筛选用户 */}
        <SearchUser value={creator} onChange={setCreator} style={selectCommonStyle} />
        {/* 筛选状态 */}
        <Select
          allowClear
          onChange={setIssueState}
          value={issueState}
          placeholder="状态"
          style={selectCommonStyle}
        >
          <Select.Option value="all">全部</Select.Option>
          <Select.Option value="open">open</Select.Option>
          <Select.Option value="closed">closed</Select.Option>
        </Select>
        {/* 筛选标签 */}
        <Select
          allowClear
          mode="multiple"
          onChange={handleLabelsChange}
          value={selectedLabels}
          placeholder="Label"
          style={{ flexGrow: 1, width: 200, margin: '0 20px' }}
        >
          {labels.map(label => (
            <Select.Option value={label.id} key={label.id}>
              {label.name}
            </Select.Option>
          ))}
        </Select>
        <Button
          loading={fetching}
          onClick={handleSearch}
          size="small"
          type="primary"
          style={{ marginRight: 11 }}
        >
          搜索
        </Button>
      </div>
      <div className="issues">
        {issues.map(issue => (
          <IssueItem key={issue.id} issue={issue} />
        ))}
      </div>
      <style jsx>
        {`
          .search {
            margin-top: 20px;
          }
          .issues {
            border: 1px solid #eee;
            border-radius: 5px;
            margin-bottom: 20px;
            margin-top: 20px;
          }
          .search {
            display: flex;
            align-items: center;
          }
          .spin {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255, 255, 255, 0.3);
            z-index: 10000;
          }
        `}
      </style>
    </div>
  );
};

Issues.getInitialProps = cache(async ({ ctx }) => {
  const { owner, name } = ctx.query;
  const [{ data: initIssues }, { data: labels }] = await Promise.all([
    request({ url: `/repos/${owner}/${name}/issues` }, ctx.req, ctx.res),
    request({ url: `/repos/${owner}/${name}/labels` }, ctx.req, ctx.res),
  ]);

  return {
    services: {
      initIssues,
      labels,
    },
  };
});

export default Issues;
