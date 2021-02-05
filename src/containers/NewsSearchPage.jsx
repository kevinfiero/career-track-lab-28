import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getArticles } from '../services/articleApi';


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

    const articleElements = articles.map(article => (
      <li key={uuidv4()}>
        <h1>{article}</h1>
      </li>
    ));

    return (
      <>
        <ul data-testid="articleList">
          <label htmlFor="search">Search Here:</label>
          <input 
            id="search" 
            type="text" 
            name="search" 
            onChange={this.handleChange}>
          </input>
          <div>{articleElements}</div>
        </ul>
      </>
    );
  }
}
