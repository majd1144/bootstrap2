import { StrictMode } from 'react' //عشان اكتشاف الايرورز المحتملة (يعني اشي تحذيري )
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
