import React from 'react';
import { render } from '@testing-library/react';

import StoryRow from './story-row';

describe('StoryRow', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<StoryRow />);
    expect(baseElement).toBeTruthy();
  });
});
