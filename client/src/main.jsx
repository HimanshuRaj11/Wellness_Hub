import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { ContextProvider } from './Context';
import { BrowserRouter } from "react-router-dom"
import './styles.css';
import { Provider } from "react-redux";
import { store } from './Redux/Store';

ReactDOM.render(
  <ContextProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ContextProvider>,
  document.getElementById('root'),
);
