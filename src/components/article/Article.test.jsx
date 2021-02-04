import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article  
      //bgColor="#FF0000" 
      //fgColor="#0000FF" 
      //text="Hello!" 
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
