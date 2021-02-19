import React from 'react';
import { render } from '@testing-library/react';
import { StoryBook_Stephen_Hawking_Data as data } from '@hacker-news-search-react-app/mock';

import StoryRow from './story-row';

describe('StoryRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <StoryRow
        story={data.hits[0]}
        labels={{ author: 'authored by', commentNumber: 'number of comments' }}
      />
    );
    expect(baseElement).toBeTruthy();
  });
});
