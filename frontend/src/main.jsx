import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom'; // Correct import for BrowserRouter
import { AuthContextProvider } from './context/Authcontext';
import { SocketContextProvider } from './context/Socketcontex';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AuthContextProvider>
      <SocketContextProvider>
      <App />
      </SocketContextProvider>
    </AuthContextProvider>
    </BrowserRouter>
  </StrictMode>
);
