import './styles/main.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createLogger from 'redux-logger';
import reducer from './reducers/index';
import App from './containers/App'

const logger = createLogger();
const createStoreWithMiddleWare = applyMiddleware(logger)(createStore);

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}> 
    <App/>
  </Provider>,
  document.getElementById('mount')
)


