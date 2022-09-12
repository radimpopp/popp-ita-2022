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
  gitJsWeb: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/jsWeb',
  gitHackertyper: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/hackertyper',
  gitTodo: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/todolist',
  gitMemoryGame: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/memoryGame',
  gitBlog: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/blog',
  gitMortgage: 'https://github.com/radimpopp/popp-ita-2022/tree/main/src/pages/mortgageCalculator',
} as const

export const anchors = {
  jsWeb: {
    jsWeb: 'jsWeb',
    history: 'history',
    jsxj: 'jsxj',
    ecma: 'ecma',
    jst: 'jsToday',
  },
  landingPage: {
    cv: 'cv',
    projects: 'projects',
    contact: 'contact',
  },
} as const

export const getArticleDetail = (slug: string) => `${urls.blog.blog}${urls.blog.detail}${slug}`
