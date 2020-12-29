import { Select, Spin } from 'antd';
import { debounce } from 'lodash';
import { useCallback, useRef, useState } from 'react';
import { request } from '../../utils/api';

function SearchUser({ onChange, value, style }) {
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  // 对比前后请求id是否相同，如果不同说明网络延迟有多次请求，当前的请求作废
  const lastFetchIdRef = useRef(0);

  const fetchUser = useCallback(
    debounce(async (searchValue, fetchId) => {
      setFetching(true);
      setOptions([]);
      const { data } = await request({ url: `/search/users?q=${searchValue}` }); // 客户端发送请求就不需要req和res了
      const userOptions = data.items.map(user => ({ text: user.login, value: user.login }));

      if (fetchId === lastFetchIdRef.current) {
        setOptions(userOptions);
      } else {
        // 不相等跳过当前请求，继续下一次发送
        setOptions([]);
      }
      setFetching(false);
    }, 500),
    []
  );

  const fetchUserBefore = searchValue => {
    lastFetchIdRef.current += 1;
    if (searchValue.trim()) return fetchUser(searchValue, lastFetchIdRef.current);
    return null;
  };

  const handleChange = searchValue => {
    onChange(searchValue);
    setOptions([]);
  };

  return (
    <Select
      allowClear
      showSearch
      value={value}
      onChange={handleChange}
      onSearch={fetchUserBefore}
      notFoundContent={fetching ? <Spin size="small" /> : <span>not found</span>}
      filterOption={false} // 禁用本地搜索
      placeholder="创建者"
      style={{ width: 200, ...style }}
    >
      {options.map(option => (
        <Select.Option key={option.value} value={option.value}>
          {option.text}
        </Select.Option>
      ))}
    </Select>
  );
}

export default SearchUser;
