import { useRouter } from 'next/router';
import DetailLayout from '../../components/DetailLayout';
import { request } from '../../utils/api';
import initClientCache from '../../utils/client-cache';
import { genDetailCacheKeyStrate, genDetailCacheKey } from '../../utils';
import Markdown from '../../components/Markdown';

const { cache, useCache } = initClientCache({
  genCacheKeyStrate: genDetailCacheKeyStrate,
});

function Detail({ readme }) {
  const router = useRouter();
  useCache(genDetailCacheKey(router), { readme });

  return <Markdown isBase64 content={readme.content} />;
}

Detail.getInitialProps = cache(async ({ ctx }) => {
  const {
    query: { owner, name },
    req,
    res,
  } = ctx;

  const { data } = await request({ url: `/repos/${owner}/${name}/readme` }, req, res);

  return {
    readme: data,
  };
});

export default DetailLayout(Detail);
