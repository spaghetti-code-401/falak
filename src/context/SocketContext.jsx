import { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';

export const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io('https://falak-socket.herokuapp.com/');
  }, []);

  return <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>;
};

export default SocketProvider;