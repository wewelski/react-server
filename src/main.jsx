import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const notes = [
  {
    id: 1,
    content: "HTML is easy",
    important: true
  },
  {
    id: 2,
    content: "Browser can only execute JavaScript",
    important: true
  },
  {
    id: 3,
    content: "GET and POST are the most important methods of HTTP protocols",
    important: true
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App notes={ notes }/>
  </React.StrictMode>,
)
