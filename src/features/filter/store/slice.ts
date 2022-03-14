/* eslint-disable @typescript-eslint/default-param-last */
import { TTodoPriority } from '@/types';

import { combineReducers } from 'redux';
import * as actionTypes from './constants';
import type { TFilterAction } from './actionCreators';

const queryReducer = (state = '', action: TFilterAction) => {
  switch (action.type) {
    case actionTypes.SET_QUERY:
      return action.payload;
    default:
      return state;
  }
};

const priorityReducer = (state: TTodoPriority | null = null, action: TFilterAction) => {
  switch (action.type) {
    case actionTypes.SET_PRIORITY:
      return action.payload;
    default:
      return state;
  }
};

const filterReducer = combineReducers({
  query: queryReducer,
  priority: priorityReducer,
});

export { filterReducer };
