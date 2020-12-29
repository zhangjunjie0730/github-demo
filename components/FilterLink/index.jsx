import Link from 'next/link';
import { isValidElement, memo } from 'react';
import { PER_PAGE } from '../../config';

// 如果传进来的这几个参数没有变化，memo可以让他不渲染
const FilterLink = memo(({ children, query, lang, sort, order, page, selected }) => {
  // 如果被点击了，就不加Link标签了，加了Link有点击小手手
  if (selected) return <span>{children}</span>;

  let queryString = `?query=${query}`;
  lang && (queryString += `&lang=${lang}`);
  sort && (queryString += `&sort=${sort}&order=${order}`);
  page && (queryString += `&page=${page}`);
  queryString += `&per_page=${PER_PAGE}`;

  return (
    <Link href={`/search${queryString}`}>
      {isValidElement(children) ? children : <a>{children}</a>}
    </Link>
  );
});

export default FilterLink;
