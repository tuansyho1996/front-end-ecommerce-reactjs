import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './contexts/themeContext.jsx'
import { ProfileProvider } from './contexts/profileContext.jsx'
import { ShopProvider } from '@contexts/shopContext.jsx'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <ThemeProvider>
      <ProfileProvider>
        <ShopProvider>
          <App />
        </ShopProvider>
      </ProfileProvider>
    </ThemeProvider>
  </BrowserRouter>
);
