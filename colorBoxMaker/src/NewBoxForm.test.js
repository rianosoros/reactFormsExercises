import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NewBoxForm from './NewBoxForm';

test('renders New Box Form with input fields', () => {
  render(<NewBoxForm />);
  const widthInput = screen.getByLabelText(/Width/i);
  expect(widthInput).toBeInTheDocument();

  const heightInput = screen.getByLabelText(/Height/i);
  expect(heightInput).toBeInTheDocument();

  const colorInput = screen.getByLabelText(/Color/i);
  expect(colorInput).toBeInTheDocument();
});

test('submits form with correct values', () => {
  const mockAddBox = jest.fn();
  render(<NewBoxForm addBox={mockAddBox} />);
  const widthInput = screen.getByLabelText(/Width/i);
  const heightInput = screen.getByLabelText(/Height/i);
  const colorInput = screen.getByLabelText(/Color/i);
  const addButton = screen.getByRole('button', { name: /Add Box/i });

  fireEvent.change(widthInput, { target: { value: '50px' } });
  fireEvent.change(heightInput, { target: { value: '50px' } });
  fireEvent.change(colorInput, { target: { value: 'blue' } });
  fireEvent.click(addButton);

  expect(mockAddBox).toHaveBeenCalledTimes(1);
  expect(mockAddBox).toHaveBeenCalledWith({ width: '50px', height: '50px', color: 'blue', id: expect.any(String) });
});
