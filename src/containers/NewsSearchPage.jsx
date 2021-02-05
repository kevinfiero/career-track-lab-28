import React, { Component } from 'react';
import { getArticles } from '../services/articleApi';
import ArticleList from '../components/article/ArticleList';
import SearchBar from '../components/search/SearchBar';


export default class NewsSearchPage extends Component {
  state = {
    search: '',
    loading: true,
    articles: []
  }

  fetchArticles = () => {
    getArticles(this.state.search).then(articles => 
      this.setState({ articles, loading: false }));
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
        <SearchBar 
          search={search}
          onChange = {this.handleChange}
        />
        {loading && <h1>Loading...</h1>}
        <ArticleList 
          articles={articles}
        />
        
      </>
    );
  }
}
