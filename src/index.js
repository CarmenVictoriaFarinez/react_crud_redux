import React from 'react';
import ReactDOM from 'react-dom';
import './css/app.css';
import App from './App';
import { createStore } from 'redux';
import postReducer from './reductores/postReducer';
import { Provider } from 'react-redux';

const store = createStore(postReducer);


ReactDOM.render(
  
<Provider store={store}>
  <App />
</Provider>,
  
  document.getElementById('root'));


