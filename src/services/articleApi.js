const fetch = require('node-fetch');

export const getArticles = (search) => {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&
  language=en&
  pageSize=50&
  apiKey=5d71be0121624998be1c1afbe98d866e`.replace(/\s/g, ''))
    .then(res => res.json())
    .then(({ articles }) =>
      articles.map((article) => (
        article.title
      ))
    );

};
