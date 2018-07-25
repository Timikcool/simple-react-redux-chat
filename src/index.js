import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import chat from './reducers'
import App from './components/presentational/App'

let store = createStore(chat,applyMiddleware(promiseMiddleware))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)