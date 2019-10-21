import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {
  createStore,
  applyMiddleware,
  // compose,
} from 'redux';
import reducers from './redux/reducers.js';
import App from './App';

// const composeEnhancers = (typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION__) ? window.__REDUX_DEVTOOLS_EXTENSION__() : compose;
// const enhancer = composeEnhancers();
const store = createStore(reducers, applyMiddleware(thunk));
// const store = createStore(reducers);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
