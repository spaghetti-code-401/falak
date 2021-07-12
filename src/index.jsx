import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import AuthProvider from './context/AuthContext';
import SocketProvider from './context/SocketContext';

ReactDOM.render(
  <React.StrictMode>
    <SocketProvider>
      <AuthProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </SocketProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
