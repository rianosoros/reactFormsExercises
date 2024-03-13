import { render, screen } from '@testing-library/react';
import BoxList from './BoxList';

test('renders Add Box Form', () => {
  render(<BoxList />);
  const formElement = screen.getByLabelText(/Width/i);
  expect(formElement).toBeInTheDocument();
});
