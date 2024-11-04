import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './pages/App.jsx'
import { GlobalStyles } from './styles/GlobalStyle.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <GlobalStyles />
  </StrictMode>,
)
