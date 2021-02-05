import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import NewsSearchPage from './NewsSearchPage';

describe('NewsSearchPage Container', () => {
  it('changes the articles listed via search input', () => {
    render(<NewsSearchPage />);

    const searchInput = screen.getByLabelText('Search Here:');
    
    user.type(searchInput, 'Tesla');

    return waitFor(() => {
      expect(screen.getByTestId('articleList')).not.toBeEmptyDOMElement();
    });

  });
});
