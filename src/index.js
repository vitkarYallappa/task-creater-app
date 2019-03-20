import React from 'react';
import ReactDOM from 'react-dom';
import TaskParent from './components/TaskParent';
import TaskNavbar from './components/TaskNavbar'

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from "./reducers";

const store = createStore(rootReducer);

ReactDOM.render(


    <Provider store={store}>
    <TaskNavbar />
<TaskParent />
</Provider>, document.getElementById('root'));


