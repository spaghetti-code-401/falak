import { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

export const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useRef();
  // const {user} = useAuth()

  useEffect(() => {
    socket.current = io('https://falak-socket.herokuapp.com/');
    // socket.current?.emit('addUser', user._id);
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;