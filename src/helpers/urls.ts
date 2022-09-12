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
  gitJsWeb: 'https://github.com/radimpopp/popp-ita-2022/blob/main/src/pages/JsWeb.tsx',
  gitHackertyper: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/hackertyper',
  gitTodo: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/todolist',
  gitMemoryGame: 'https://github.com/radimpopp/popp-ita-2022/blob/main/src/pages/MemoryGame.tsx',
  gitBlog: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/blog',
  gitMortgage:
    'https://github.com/radimpopp/popp-ita-2022/blob/main/src/pages/MortgageCalculator.tsx',
} as const

export const getArticleDetail = (slug: string) => `${urls.blog.blog}${urls.blog.detail}${slug}`
