import { useRouter } from 'next/router';
import { Input } from 'antd';
import { useCallback, useState } from 'react';

const SearchInput = () => {
  const router = useRouter();
  const urlQuery = router.query && router.query.query; // 得到当前路由的参数，如果直接输入地址，自动将检索内容加入到搜索框
  const [search, setSearch] = useState(urlQuery || '');

  const handleSearchChange = useCallback(e => setSearch(e.target.value), []); // 因为依赖于setSearch，而这个方法是不会改变的，所以可以直接传[]
  const handleOnSearch = useCallback(() => router.push(`/search?query=${search}`), [search]);

  return (
    <Input.Search
      onChange={handleSearchChange}
      onSearch={handleOnSearch}
      value={search}
      placeholder="search..."
      style={{ paddingTop: '17px' }}
    />
  );
};

export default SearchInput;
