import type { TRootState } from './redux';

const allTodoSelector = (state: TRootState) => state.todoList;

export { allTodoSelector };
