import { render, fireEvent } from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

test('renders NewTodoForm component and adds todo', () => {
  const mockAddTodo = jest.fn();
  const { getByPlaceholderText, getByText } = render(<NewTodoForm addTodo={mockAddTodo} />);

  const input = getByPlaceholderText('Enter task');
  const addButton = getByText('Add Todo');

  fireEvent.change(input, { target: { value: 'Test Task' } });
  fireEvent.click(addButton);

  expect(mockAddTodo).toHaveBeenCalledTimes(1);
  expect(mockAddTodo).toHaveBeenCalledWith('Test Task');
});
