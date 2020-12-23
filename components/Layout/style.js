import styled from 'styled-components';

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between; /* 两边对齐 */
`;

export const HeaderLeft = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

// 把icon样式固定在外部对象中的好处：每次重新渲染样式都拿到的是同一个对象，这样就不会重新渲染。
export const githubIconStyle = {
  color: 'white',
  fontSize: 40,
  display: 'block',
  // paddingTop: 10,
  marginRight: 20,
};

export const footer = {
  textAlign: 'center',
};
