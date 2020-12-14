import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counterReducer from './reducers';

const store = createStore(counterReducer);

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <Router basename={process.env.PUBLIC_URL} >
      <App />
    </Router>
  </Provider>, rootElement
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

registerServiceWorker();