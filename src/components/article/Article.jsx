import React from 'react';
import PropTypes from 'prop-types';

const Article = ({ article }) => (
  <h1>{article}</h1>
);

Article.propTypes = {
  article: PropTypes.string.isRequired
};

export default Article;
