import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { TodoListContainer } from './features/todo-list';

import '@/styles/index.scss';
import { FilterContainer } from './features/filter';

const App: React.FC = () => (
  <Provider store={store}>
    <FilterContainer />
    <TodoListContainer />
  </Provider>
);

export default App;
