import React from "react";
import ReactDOM from "react-dom";

//TODO Task List:
//✅ 1. Add in all necessary components and libary methods.
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducer } from './reducers';

import App from "./App";
import "./index.css";

//✅ 2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk, logger));

const { worker } = require('./mocks/browser');
worker.start();

//✅ 3. Wrap the App component in a react-redux Provider element.
const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    rootElement
);
