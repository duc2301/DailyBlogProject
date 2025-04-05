import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from '../src/Pages/HomePage'
import AppRouter from './Router/router'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
    <ToastContainer/>
  </StrictMode>,
)
