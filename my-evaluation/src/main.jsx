import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom"
import { AuthcontextProvider } from './context/AuthContext.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
    <AuthcontextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthcontextProvider>
    </ChakraProvider>
  </React.StrictMode>,
)
