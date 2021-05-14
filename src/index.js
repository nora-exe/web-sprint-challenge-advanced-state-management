// Connect your application to reducer through redux with the thunk and logger middleware packages attached.
import React from "react";
import ReactDOM from "react-dom";

//* ✔ Task List:
//* ✔ 1. Add in all necessary components and library methods.
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import reducer from './reducers';

import App from "./App";
import "./index.css";

const { worker } = require('./mocks/browser');
worker.start();

//* ✔ 2. Create a store that includes thunk and logger middleware support.
const store = createStore(reducer, applyMiddleware(thunk, logger));

//* ✔  3. Wrap the App component in a react-redux Provider element.
const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    rootElement
);
