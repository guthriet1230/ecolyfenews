import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import reduxThunk from 'redux-thunk'

import configureStore from './store/configureStore'
import App from './App';
const store = configureStore();

ReactDOM.render(
    <BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>,
    document.getElementById('root'));
