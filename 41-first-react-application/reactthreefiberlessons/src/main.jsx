import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <App clickersCount ={3}>
  <h1>My First React Application</h1>
  <h2>And a fancy website</h2>
  
  </App>
  </React.StrictMode>,
)