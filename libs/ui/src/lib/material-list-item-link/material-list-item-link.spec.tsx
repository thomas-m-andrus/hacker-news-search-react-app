import React from 'react';
import { render } from '@testing-library/react';

import MaterialListItemLink from './material-list-item-link';

describe('MaterialListItemLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MaterialListItemLink />);
    expect(baseElement).toBeTruthy();
  });
});
