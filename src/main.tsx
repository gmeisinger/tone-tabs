import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import App from './App'
import Tab from './Tab'

ReactDOM.render(
  <React.StrictMode>
    <Tab numBars="12"/>
  </React.StrictMode>,
  document.getElementById('root')
)
