import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BalanceState from './contextapi/BalanceState.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BalanceState>
      <App />
    </BalanceState>
  </StrictMode>
)
