import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Router from './routes';
import reducers from './reducers';
import getStore from './store/getStore';

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={getStore(reducers)}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
