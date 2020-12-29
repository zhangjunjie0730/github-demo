import { Avatar, Button } from 'antd';
import { useState, useCallback } from 'react';
import { getTimeFromNow } from '../../utils';
import Markdown from '../Markdown';

const IssueDetail = ({ issue }) => {
  return (
    <div className="root">
      <Markdown content={issue.body} />
      <div className="actions">
        <Button href={issue.html_url} target="_blank">
          打开issue讨论页面
        </Button>
      </div>
      <style jsx>
        {`
          .root {
            background: #fefefe;
            padding: 20px;
          }

          .actions {
            text-align: right;
          }
        `}
      </style>
    </div>
  );
};

const Label = ({ label }) => {
  return (
    <>
      <span className="label">
        {label.name}
        <style jsx>
          {`
            .label {
              margin-left: 8px;
              height: 20px;
              padding: 0.15em 4px;
              font-size: 12px;
              font-weight: 600;
              line-height: 15px;
              border-radius: 2px;
              box-shadow: inset 0 -1px 0 rgba(27, 31, 35, 0.12);
              background-color: #${label.color};
            }
          `}
        </style>
      </span>
    </>
  );
};

const IssueItem = ({ issue }) => {
  const [showDetail, setShowDetail] = useState(false);

  const toggleShowDetail = useCallback(() => {
    setShowDetail(show => !show);
  }, []);

  return (
    <div className="root">
      <div className="issue">
        <Button onClick={toggleShowDetail} className="view-btn" type="primary" size="small">
          查看
        </Button>
        <div className="avatar">
          <Avatar src={issue.user.avatar_url} shape="square" size={50} />
        </div>
        <div className="main-info">
          <h6>
            <span>{issue.title}</span>
            {issue.labels.map(label => (
              <Label label={label} key={label.id} />
            ))}
          </h6>
          <p className="sub-info">
            <span>Updated at {getTimeFromNow(issue.updated_at)}</span>
          </p>
        </div>
      </div>
      {showDetail ? <IssueDetail issue={issue} /> : null}
      <style jsx>
        {`
          :global(.view-btn) {
            position: absolute;
            right: 10px;
            top: 10px;
          }
          .root + .root {
            border-top: 1px solid #eee;
          }
          .issue {
            display: flex;
            position: relative;
            padding: 10px;
          }
          .issue:hover {
            background: #fafafa;
          }
          .main-info > h6 {
            padding-right: 40px;
            font-size: 16px;
            word-break: break-all;
          }
          .avatar {
            margin-right: 20px;
          }
          .sub-info {
            margin-bottom: 0;
          }
          .sub-info > span + span {
            display: inline-block;
            margin-left: 20px;
            font-size: 12px;
          }
        `}
      </style>
    </div>
  );
};

export default IssueItem;
