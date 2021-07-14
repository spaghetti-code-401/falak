import { useState } from 'react';
import { createContext, useContext, useEffect, useRef } from 'react';
import { io } from 'socket.io-client';
import { useAuth } from './AuthContext';

export const SocketContext = createContext();

export const useSocket = () => useContext(SocketContext)

const SocketProvider = ({ children }) => {
  const socket = useRef();
  const {user} = useAuth()
  const [onlineUsers, setOnlineUsers] = useState()

  useEffect(() => {
    socket.current = io('https://falak-socket.herokuapp.com/');
    socket.current?.emit('addUser', user?._id);
    socket.current?.on('getUsers', (socketUsers) => {
      // console.log('getUsers');
      setOnlineUsers(
        user?.following.filter((f) => socketUsers.some((u) => u.userId === f))
      );
    });
    console.log('SOCKET CONTEXT')
  }, [user?._id, user?.following]);

  // useEffect(() => {
  // }, [socket, user._id, user.following]);

  return <SocketContext.Provider value={{socket, onlineUsers}}>{children}</SocketContext.Provider>;
};

export default SocketProvider;