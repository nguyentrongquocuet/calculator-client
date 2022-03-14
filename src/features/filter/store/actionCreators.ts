import { TTodoPriority } from '@/types';
import * as actionTypes from './constants';

type TSetPriorityAction = {
  type: typeof actionTypes.SET_PRIORITY;
  payload: TTodoPriority | null;
};

export const setFilterPriority = (priority: TTodoPriority | undefined): TSetPriorityAction => ({
  type: actionTypes.SET_PRIORITY,
  payload: priority || null,
});

type TSetQueryAction = {
  type: typeof actionTypes.SET_QUERY;
  payload: string;
};

export const setFilterQuery = (query: string): TSetQueryAction => ({
  type: actionTypes.SET_QUERY,
  payload: query,
});

export type TFilterAction = TSetPriorityAction | TSetQueryAction;
