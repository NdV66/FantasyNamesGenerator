import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import { mainReducer }from './reducers';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

const store = createStore(mainReducer, { generatedName: 'Test' });

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
