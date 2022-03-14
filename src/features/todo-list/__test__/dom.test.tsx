import React from 'react';
import { Provider } from 'react-redux';
import { cleanup, render } from '@testing-library/react';
import { TEST_ID } from '@/app/testing';
import { filteredTodoListSelector, store } from '@/app/store';
import { PRIORITY, STATUS } from '@/types';

import { TodoListContainer } from '../container';
import { addTodo } from '../store/actionCreators';

describe('Todo List', () => {
  afterEach(cleanup);

  test('Successfully rendered', () => {
    const element = render(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>,
    );

    expect(!!element.getByTestId(TEST_ID.TODO_LIST)).toBe(true);
  });

  test('Render all items', () => {
    const element = render(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>,
    );
    const todoList = filteredTodoListSelector(store.getState());

    const todoListEl = element.getByTestId(TEST_ID.TODO_LIST);

    const todoEls = todoListEl.querySelectorAll(`[data-testid="${TEST_ID.TODO}"]`);

    expect(todoList.length === todoEls.length).toBeTruthy();
  });

  test('Render all items after updated', () => {
    const element = render(
      <Provider store={store}>
        <TodoListContainer />
      </Provider>,
    );
    store.dispatch(addTodo({ content: '123', priority: PRIORITY.HIGH, status: STATUS.COMPLETED }));

    const todoList = filteredTodoListSelector(store.getState());

    const todoListEl = element.getByTestId(TEST_ID.TODO_LIST);

    const todoEls = todoListEl.querySelectorAll(`[data-testid="${TEST_ID.TODO}"]`);

    expect(todoList.length === todoEls.length).toBeTruthy();
  });
});
