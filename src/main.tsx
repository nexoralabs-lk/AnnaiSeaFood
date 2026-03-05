import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

// BASE_URL is set by Vite from the "base" config (e.g. /Annai/ for GitHub Pages)
const basename = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? ''

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
