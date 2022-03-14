import { composeResult } from '../utils';
import type { TRootState } from './redux';

const allTodoSelector = (state: TRootState) => state.todoList;

const filterQuerySelector = (state: TRootState) => state.filter.query;

const filterPrioritySelector = (state: TRootState) => state.filter.priority || undefined;

const filteredTodoListSelector = composeResult(
  allTodoSelector,
  filterPrioritySelector,
  filterQuerySelector,
  (allTodo, priority, query) => {
    if (!query && !priority) return allTodo;

    const matchedPriorityTodoList = priority ? allTodo.filter(
      (todo) => todo.priority === priority,
    ) : allTodo;

    const matchedQueryTodoList = query ? matchedPriorityTodoList.filter(
      (todo) => todo.content.includes(query),
    ) : matchedPriorityTodoList;

    return matchedQueryTodoList;
  },
);

export { allTodoSelector, filterQuerySelector, filterPrioritySelector, filteredTodoListSelector };
