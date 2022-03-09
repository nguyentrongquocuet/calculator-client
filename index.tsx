import React from 'react';
import { render } from 'react-dom';
import App from '@/App';

/**
 * Ant design styles
 */
import 'antd/dist/antd.css';

render(<App />, document.querySelector('#app')!);
