export const urls = {
  homeUrl: '/',
  jsWebUrl: '/js-web',
  urlAll: '/*',
  historyUrl: '/history',
  ecmaUrl: '/ecma',
  jsxjUrl: '/js-java',
  jstUrl: '/js-today',
  jsWebPathUrl: '/js-web/*',
  counterAppUrl: '/counter-app',
  todoListUrl: '/todo-list',
  hackerTyperUrl: '/hackertyper',
  memoryGameUrl: '/memory-game',
  mortgageCalculatorUrl: '/mortgage-calculator',
  blogUrl: '/blog',
  blogArticlesUrl: '/articles',
  blogCreateUrl: '/create-new-article',
  blogArticleDetailUrl: '/article-detail/',
  slug: ':slug',
  allArticlesPathUrl: '/blog/articles',
  createNewPathUrl: '/blog/create-new-article',
  articleDetailPathUrl: '/article-detail/:slug',
  blogPathUrl: '/blog/*',
} as const

export const getArticleDetail = (slug: string) =>
  `${urls.blogUrl}${urls.blogArticleDetailUrl}${slug}`
