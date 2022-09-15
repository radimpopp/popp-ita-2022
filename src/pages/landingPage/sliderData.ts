import { urls } from '../../helpers/urls'
import blog from '../../images/blog.png'
import github from './images/github.png'
import hackertyper from '../../images/hackertyper.png'
import jsweb from '../../images/jsweb.png'
import memoryGame from '../../images/memoryGame.png'
import mortgage from '../../images/mortgage.png'
import todo from '../../images/todo.png'
import todoRedux from '../../images/todoRedux.png'

export const sliderData = [
  {
    title: 'JavaScript History',
    toApp: urls.jsWeb,
    toGit: urls.gitJsWeb,
    altPreview: 'JavaScript History Preview',
    altGit: 'JavaScript History Repository',
    srcPreview: jsweb,
    srcGit: github,
  },
  {
    title: 'HackerTyper',
    toApp: urls.hackerTyper,
    toGit: urls.gitHackertyper,
    altPreview: 'HackerTyper Preview',
    altGit: 'HackerTyper Repository',
    srcPreview: hackertyper,
    srcGit: github,
  },
  {
    title: 'ToDo List Redux',
    toApp: urls.todoListRedux,
    toGit: urls.gitRedux,
    altPreview: 'ToDo List Redux Preview',
    altGit: 'ToDo List Redux Repository',
    srcPreview: todoRedux,
    srcGit: github,
  },
  {
    title: 'Memory Game',
    toApp: urls.memoryGame,
    toGit: urls.gitMemoryGame,
    altPreview: 'Memory Game Preview',
    altGit: 'Memory Game Repository',
    srcPreview: memoryGame,
    srcGit: github,
  },
  {
    title: 'Mortgage Calculator',
    toApp: urls.mortgageCalculator,
    toGit: urls.gitMortgage,
    altPreview: 'Mortgage Calculator Preview',
    altGit: 'Mortgage Calculator Repository',
    srcPreview: mortgage,
    srcGit: github,
  },
  {
    title: 'Blog',
    toApp: urls.blog.allArticlesPath,
    toGit: urls.gitBlog,
    altPreview: 'Blog Preview',
    altGit: 'Blog Repository',
    srcPreview: blog,
    srcGit: github,
  },
]
