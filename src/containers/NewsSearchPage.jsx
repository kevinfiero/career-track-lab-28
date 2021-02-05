import React, { Component } from 'react';

import { getArticles } from '../services/articleApi';
import ArticleList from '../components/article/ArticleList';


export default class NewsSearchPage extends Component {
  state = {
    search: '',
    loading: true,
    articles: []
  }

  fetchArticles = () => {
    getArticles(this.state.search).then(articles => 
      this.setState({ articles }));
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value }, () => {
      this.fetchArticles();
    });
  }
  render() {
    const { search, loading, articles } = this.state;



    return (
      <>
        <label htmlFor="search">Search Here:</label>
        <input 
          id="search" 
          type="text" 
          name="search" 
          onChange={this.handleChange}>
        </input>
        <ArticleList 
          articles={articles}
        />
        
      </>
    );
  }
}
