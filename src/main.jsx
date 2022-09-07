import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { AppProvider } from "./Context";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
  domain="dev-d2alzfio.us.auth0.com"
  clientId="zHN02vJjtxvl9RawlJgk6KX0FAHgCUfH"
  redirectUri={window.location.origin}>
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>
)

// Domain - dev-d2alzfio.us.auth0.com   
// client id - zHN02vJjtxvl9RawlJgk6KX0FAHgCUfH   
