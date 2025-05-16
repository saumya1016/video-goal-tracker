import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { VideoProvider } from './VideoContext';

createRoot(document.getElementById('root')).render(
  <VideoProvider>
  <App />
</VideoProvider>
)
