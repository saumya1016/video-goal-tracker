import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { VideoProvider } from './VideoContext';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <VideoProvider>
    <App />
  </VideoProvider>
);