import { render } from '@testing-library/react';
import Box from './Box';
import React from 'react';

test('renders', () => {
  render(<Box />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<Box />);
  expect(asFragment()).toMatchSnapshot();
});
