import { PRIORITY, STATUS } from '@/types';
import { todoListReducer } from '../store';
import { addTodo, toggleStatus } from '../store/actionCreators';

describe('Todo list slice', () => {
  const defaultState = todoListReducer(undefined, {} as unknown as any);

  test('Properly add new todo', () => {
    const oldLength = defaultState.length;

    const newState = todoListReducer(defaultState, addTodo({ content: 'hello', priority: PRIORITY.LOW, status: STATUS.COMPLETED }));

    expect(newState.length - oldLength).toBe(1);
  });

  test('Properly toggle todo\'s status', () => {
    const todoToTest = defaultState[0];
    const idToToggle = todoToTest.id.toString();
    const lastStatus = todoToTest.status;
    const newState = todoListReducer(defaultState, toggleStatus(idToToggle));

    expect(newState[0].status !== lastStatus).toBe(true);
  });
});
