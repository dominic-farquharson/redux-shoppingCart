import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store';
// import registerServiceWorker from './registerServiceWorker';

const StoreInstance = Store();

render(
  <Provider store={StoreInstance}>
    <App />
  </Provider>, 
  document.getElementById('root'));
// registerServiceWorker();
