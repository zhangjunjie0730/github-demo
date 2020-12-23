function Detail() {
  return <span>detail</span>;
}

Detail.getInitialProps = () => {
  return new Propmise(resolve => {
    setTimeout(() => {
      resolve({ a: 'hajah' });
    }, 1000);
  });
};

export default Detail;
