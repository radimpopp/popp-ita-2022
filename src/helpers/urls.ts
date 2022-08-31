export const urls = {
  home: '/',
  jsweb: {
    jsWeb: '/js-web',
    history: '/history',
    historyPath: '/js-web/history',
    ecma: '/ecma',
    ecmaPath: '/js-web/ecma',
    jsxj: '/js-java',
    jsxjPath: '/js-web/js-java',
    jst: '/js-today',
    jstPath: '/js-web/js-today',
    jsWebPath: '/js-web/*',
  },
  counterApp: '/counter-app',
  todoList: '/todo-list',
  hackerTyper: '/hackertyper',
  memoryGame: '/memory-game',
  mortgageCalculator: '/mortgage-calculator',
  blog: {
    blog: '/blog',
    articles: '/articles',
    new: '/create-new-article',
    detail: '/article-detail/',
    allArticlesPath: '/blog/articles',
    createNewPath: '/blog/create-new-article',
    articleDetailPath: '/article-detail/:slug',
    blogPath: '/blog/*',
  },
} as const

export const getArticleDetail = (slug: string) => `${urls.blog.blog}${urls.blog.detail}${slug}`
