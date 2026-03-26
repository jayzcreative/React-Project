import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './input.css' // IMPORTANT: This is what connects Tailwind to React

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)