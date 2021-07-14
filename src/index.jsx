import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeProvider from './context/ThemeContext';
import AuthProvider from './context/AuthContext';
import SocketProvider from './context/SocketContext';
import ChatProvider from './context/ChatContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <ChatProvider>
        {/* <SocketProvider> */}
        <ThemeProvider>
          <App />
        </ThemeProvider>
        {/* </SocketProvider> */}
      </ChatProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
