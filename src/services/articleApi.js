const fetch = require('node-fetch');

export const getArticles = (search) => {
  return fetch(`https://newsapi.org/v2/everything?q=${search}&
  language=en&
  pageSize=50&
  apiKey=e0abc36bfb0741bb952e3fd2e96f4e1b`.replace(/\s/g, ''))
    .then(res => res.json())
    .then(({ articles }) =>
      articles.map((article) => (
        article.title
      ))
    );

};
