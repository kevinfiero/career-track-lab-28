import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ArticleList from './ArticleList';

describe('ArticleList component', () => {
  afterEach(() => cleanup());
  it('renders ArticleList', () => {
    const { asFragment } = render(<ArticleList  
      //bgColor="#FF0000" 
      //fgColor="#0000FF" 
      //text="Hello!" 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
