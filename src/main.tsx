import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { IntroProvider } from './utils/HasOpenedContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <IntroProvider>
      <App />
    </IntroProvider>
  </React.StrictMode>
)
