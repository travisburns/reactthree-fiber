import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const toto = 'there'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   

   <h1 className='title'>
    Hello { toto }
   </h1>
   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, inventore!</p>
  </React.StrictMode>,
)