import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import AuthProvider from './context/AuthContext';
// import SocketProvider from './context/SocketContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      {/* <SocketProvider> */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
      {/* </SocketProvider> */}
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
