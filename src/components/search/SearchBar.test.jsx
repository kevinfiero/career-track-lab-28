import React from 'react';
import { render, cleanup } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('SearchBar component', () => {
  afterEach(() => cleanup());
  it('renders SearchBar', () => {
    const { asFragment } = render(<SearchBar 
      search = "Tesla"
      onChange = {jest.fn()}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
