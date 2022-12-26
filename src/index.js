/* eslint-disable indent */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { reducer } from './redux-related/reducer'
import './index.css'
import App from './App'

const store = createStore(reducer)
store.subscribe(() => {
  console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
