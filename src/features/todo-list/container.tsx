import React from 'react';
import { StyledCol as Col, StyledRow as Row } from '@/BaseUI';

import { allTodoSelector } from '@/app/store/selectors';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';

import { Todo } from '@/components/todo';
import { TodoList } from '@/components/todo-list';
import { NewTodo } from '@/components/new-todo';
import { TTodoData } from '@/types';

import { addTodo, toggleStatus } from './store/actionCreators';

const MemorizedTodo = React.memo(Todo);

const TodoListContainer = () => {
  const todoList = useAppSelector(allTodoSelector);
  const dispatch = useAppDispatch();

  const onToggleStatus = React.useCallback(
    (id: string) => {
      dispatch(toggleStatus(id));
    },
    [dispatch],
  );

  const onAddNewTodo = React.useCallback(
    (data: TTodoData) => {
      dispatch(addTodo(data));
    },
    [dispatch],
  );

  return (
    <Row>
      <TodoList
        todoList={todoList}
        renderItem={(todo) => (
          <MemorizedTodo
            key={todo.id}
            {...todo}
            onToggleStatus={onToggleStatus}
          />
        )}
      />
      <Col span={24}>
        <NewTodo onSubmit={onAddNewTodo} />
      </Col>
    </Row>
  );
};

export { TodoListContainer };
