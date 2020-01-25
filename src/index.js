import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './redux/store/store'
import 'antd/dist/antd.css';

import './index.css'
import App from './App'



store.subscribe(() => {
  // console.log('state is update')
  // console.log('state = ', store.getState())
  localStorage.setItem('notes', JSON.stringify(store.getState().notes))
 }) 

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


