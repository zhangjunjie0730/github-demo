/**
 * github oath配置
 */

const GITHUB_OAUTH_URL = 'https://github.com/login/oauth/authorize';
const SCOPE = 'user';

const github = {
  request_token_url: 'https://github.com/login/oauth/access_token',
  client_id: '887cd757babf66918d15',
  client_secret: '06f3566a26818a93176ca0a13ec48d8addf3341d',
};

const LANGUAGES = ['JavaScript', 'HTML', 'CSS', 'TypeScript', 'Java', 'Vue', 'React', 'Node'];
const SORT_TYPES = [
  {
    name: 'Best Match',
  },
  {
    name: 'Most Starts',
    sort: 'stars',
    order: 'desc',
  },
  {
    name: 'Fewest Starts',
    sort: 'stars',
    order: 'asc',
  },
  {
    name: 'Most Forks',
    sort: 'forks',
    order: 'desc',
  },
  {
    name: 'Fewest Forks',
    sort: 'forks',
    order: 'asc',
  },
];
const PER_PAGE = 20;

module.exports = {
  github,
  GITHUB_OAUTH_URL,
  OAUTH_URL: `${GITHUB_OAUTH_URL}?client_id=${github.client_id}&scope=${SCOPE}`,
  LANGUAGES,
  SORT_TYPES,
  PER_PAGE,
};
