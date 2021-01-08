import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore,applyMiddleware} from 'redux'
import reducerfunction from './reducers/reducer'
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import {counterfun} from './Sagas/saga'
const SagaMiddleware = createSagaMiddleware();
const store = createStore(reducerfunction, applyMiddleware(SagaMiddleware));
SagaMiddleware.run(counterfun);



ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
