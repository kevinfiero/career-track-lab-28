import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';

const ArticleList = ({ articles }) => {
  const articleElements = articles.map(article => (
    <li key={uuidv4()}>
      <Article article={article} />
    </li>
  ));

  return (
    <>
      <ul data-testid="articleList">
        <div>{articleElements}</div>
      </ul>
    </>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
