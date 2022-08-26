import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Game from './game';
import { Provider } from 'react-redux'
import store from './store'


 
  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Game />
  </Provider>
);
  
  