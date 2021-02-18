import React from 'react';
import { render } from '@testing-library/react';

import SearchBoxWrapper from './search-box-wrapper';

describe('SearchBoxWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SearchBoxWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
