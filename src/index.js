import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'
import store from './app/store'

const rootEl = document.getElementById('app')

if (module.hot) {
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers')
    store.replaceReducer(nextRootReducer)
  })
}

ReactDOM.render(<App />, rootEl)
