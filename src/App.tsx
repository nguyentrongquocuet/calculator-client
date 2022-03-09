import React from 'react';
import { Provider } from 'react-redux';

import '@/styles/index.scss';
import { store } from './app/store';
import { TodoListContainer } from './features/todo-list';

const App: React.FC = () => (
  <Provider store={store}>
    <TodoListContainer />
  </Provider>
);

export default App;
