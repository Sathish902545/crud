import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import Curd from './Crud.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Curd />
  </StrictMode>,
)
