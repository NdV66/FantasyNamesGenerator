import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware  } from 'redux';
import { mainReducer }from './reduxUtils/reducers/mainReducer';
import thunk from 'redux-thunk';
import App from './App';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGrinBeam, faCodeBranch, faCampground} from '@fortawesome/free-solid-svg-icons'

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/style.scss';

const store = createStore(mainReducer, applyMiddleware(thunk));

library.add(faGrinBeam, faCodeBranch, faCampground);

ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
