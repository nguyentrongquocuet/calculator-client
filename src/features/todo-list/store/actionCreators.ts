import { uniqueId } from '@/app/utils';
import { ITodo, TTodoData } from '@/types';
import * as actionTypes from './constants';

export type TToggleStatus = {
  type: typeof actionTypes.TOGGLE_STATUS;
  payload: string;
};

export type TAddTodo = {
  type: typeof actionTypes.ADD_TODO;
  payload: ITodo;
};

export type TAction = TToggleStatus | TAddTodo;

const toggleStatus = (id: string): TToggleStatus => ({
  type: actionTypes.TOGGLE_STATUS,
  payload: id,
});

const addTodo = (data: TTodoData): TAddTodo => ({
  type: actionTypes.ADD_TODO,
  payload: {
    ...data,
    created: Date.now(),
    id: uniqueId(),
  },
});

export { toggleStatus, addTodo };
