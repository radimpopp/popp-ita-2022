export const urls = {
  home: '/',
  jsWeb: '/jsweb',
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
  cv: '/cv',
} as const

export const getArticleDetail = (slug: string) => `${urls.blog.blog}${urls.blog.detail}${slug}`
