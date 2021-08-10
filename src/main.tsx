import React from 'react'
import ReactDOM from 'react-dom'
import './css/style.css'
import App from './App'
import TabContainer from './Tab'

ReactDOM.render(
    <React.StrictMode>
        <h1>Tone Tabs</h1>
        <h3>George Meisinger</h3>
        <TabContainer numBars="12"/>
    </React.StrictMode>,
    document.getElementById('root')
)
