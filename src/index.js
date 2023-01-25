import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "swiper/css/bundle";
import './styles/style.global.css'
import { AuthProvider } from "./contexts/Auth/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App/>
    </AuthProvider>
  </React.StrictMode>
);
