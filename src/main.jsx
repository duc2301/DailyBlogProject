import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomePage from '../src/Pages/HomePage'
import AppRouter from './Router/router'
import { ToastContainer } from 'react-toastify'
import { GoogleOAuthProvider } from '@react-oauth/google'

const clientId = "394301673798-69i8vu8sta53oj9al584r63l1etbvfc7.apps.googleusercontent.com";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <AppRouter />
      <ToastContainer/>
    </GoogleOAuthProvider>
  </StrictMode>,
)
