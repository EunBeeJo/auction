import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home, Login, Register } from './containers';

// router
import { BrowserRouter, Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

import registerServiceWorker from './registerServiceWorker';

// 1. createStore, combineReducers
// 1. bindActionCreators
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path='/' component={App}/>
                <Route path='/home' component={Home}/>
                <Route path='/login' component={Login}/>
                <Route path='/register' component={Register}/>
            </div>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
