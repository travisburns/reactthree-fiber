import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Clicker from './Clicker.jsx'

const toto = 'there'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App />
  <Clicker />
  </React.StrictMode>,
)