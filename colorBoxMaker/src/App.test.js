import { render } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders Color Box Maker', () => {
  render(<App />);
});

test('matches snapshot', () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
