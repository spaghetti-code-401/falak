import React, { useRef, useEffect } from 'react';
import Header from '../components/Header';
import ChatSideBar from '../components/ChatSideBar';
import Messages from '../components/Messages';
import './chat.scss';

export default function Chat() {
  const socket = useRef()

  // useEffect(() => {
  //   socket.current = io.connect('https://falak-socket.herokuapp.com/')
  // }, [])
  
  return (
    <div>
      <Header />
      <div className="chatContainer">
        <Messages />
        <ChatSideBar />
      </div>
    </div>
  );
}
