import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ContexsProvider } from './contexts/UseContexts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ContexsProvider>
      <App />
    </ContexsProvider>
  </React.StrictMode>
)
