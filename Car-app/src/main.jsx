import  ReactDOM  from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import { Provider } from 'react-redux';
import { store } from '../src/ReduxToolkit/store.js';
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
 
  <Provider store={store}>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
);