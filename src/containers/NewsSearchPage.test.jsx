import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import NewsSearchPage from './NewsSearchPage';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://newsapi.org/v2/everything', (req, res, ctx) => {
    return res(
      ctx.json({
        articles: ['Article 1', 'Article 2', 'Article 3'],
      })
    );
  })
);


describe('NewsSearchPage Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('changes the articles listed via search input', () => {
    render(<NewsSearchPage />);

    const searchInput = screen.getByLabelText('Search Here:');
    
    user.type(searchInput, 'Tesla');

    return waitFor(() => {
      expect(screen.getByTestId('articleList')).not.toBeEmptyDOMElement();
    });

  });
});
