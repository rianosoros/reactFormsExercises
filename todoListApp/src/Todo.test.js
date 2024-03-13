import { render, fireEvent } from '@testing-library/react';
import Todo from './Todo';

test('renders Todo component and removes todo', () => {
  const mockRemoveTodo = jest.fn();
  const todo = { id: 1, task: 'Test Task' };
  const { getByText } = render(<Todo todo={todo} removeTodo={mockRemoveTodo} />);

  const removeButton = getByText('X');

  fireEvent.click(removeButton);

  expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
  expect(mockRemoveTodo).toHaveBeenCalledWith(1);
});
