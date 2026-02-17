import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Assignment1 from './Assignments/2nd_assignment.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Assignment1 />
  </StrictMode>,
)
