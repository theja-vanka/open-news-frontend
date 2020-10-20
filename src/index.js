import React from 'react';
import ReactDOM from 'react-dom';

import { Provider }from 'react-redux'
import { createStore, applyMiddleware } from 'redux'

import App from './App'

const createStoreWithMiddleware = applyMiddleware()(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware()}>
        <App/>
    </Provider>,
    document.getElementById('root'))