import React from 'react';
import ReactDOM from 'react-dom';
import { App, Home } from './containers';
import { BrowserRouter, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route path='/' component={App}/>
            <Route path='/home' component={Home}/>
        </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
