/* eslint-disable indent */
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import { configureStore } from '@reduxjs/toolkit'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'

import { reducer } from './redux-related/reducer'
import { ticketsApi } from './rtk-related/ticketsSlice'
import './index.css'
import App from './App'

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {
  console.log(store.getState())
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={ticketsApi}>
        <App />
      </ApiProvider>
    </Provider>
  </React.StrictMode>
)
