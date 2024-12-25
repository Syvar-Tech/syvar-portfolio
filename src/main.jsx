import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Snowfall from 'react-snowfall'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Snowfall style={{
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 9999
  }}/>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
