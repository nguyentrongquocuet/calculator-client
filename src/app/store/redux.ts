import { combineReducers, compose, createStore } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from '@redux-devtools/extension';
import { todoListReducer } from '@/features/todo-list/store';
import { filterReducer } from '@/features/filter/store';

const rootReducer = combineReducers({ todoList: todoListReducer, filter: filterReducer });

const store = createStore(rootReducer, compose(composeWithDevTools()));

export type TRootState = ReturnType<typeof store.getState>;

export type TRootDispatch = typeof store.dispatch;

export { store };
