import React, { Component } from 'react';
import ArticleList from '../components/article/ArticleList';
import SearchBar from '../components/search/SearchBar';

export default class ColorPicker extends Component {
  state = {
    search: '',
    loading: true,
    articles: []
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  render() {
    const { search, loading, articles } = this.state;
    return (
      <>
        <SearchBar 
          //prop={prop}
          //onChange={this.handleChange}
        />
        <ArticleList 
          //prop={prop}
          //onChange={this.handleChange}
        />
      </>
    );
  }
}
