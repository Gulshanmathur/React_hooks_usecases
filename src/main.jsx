import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
const reactElement = {
  type: 'a',
  props :{
      href: "https://google.com",
      target: "_blank",
  },
  Children: "this is custom element"
}
  */

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
)
