import { cloneElement } from 'react';

const style = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 20px',
};

// 通过这种方式能减少一个div标签，将container的属性集成在子组件的div上！
export default ({ children, renderer = <div /> }) => {
  const newElement = cloneElement(renderer, {
    style: Object.assign({}, renderer.props.style, style),
    children,
  });
  return newElement;
};
