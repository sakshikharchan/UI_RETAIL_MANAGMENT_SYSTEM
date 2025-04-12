import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ManagerDashBoard from './ManagerDashBoard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <ManagerDashBoard /> */}
  </StrictMode>
)
