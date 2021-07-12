import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import Message from '../components/Message';
import ChatSideBar from '../components/ChatSideBar';
import './chat.scss';
import { useSocket } from '../context/SocketContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import useAPI from '../hooks/useAPI';
import '../components/chatForm.scss'
import '../components/chatTop.scss'
import '../components/messages.scss'


export default function Chat() {
  const { glass2, lightText, glass } = useTheme()
  const API = useAPI()


  const socket = useSocket();
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  const { user } = useAuth();


  useEffect(() => {
    socket?.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage && currentConversation?.members.includes(arrivalMessage.sender) && setMessages(prev => [...prev, arrivalMessage])

  }, [arrivalMessage, currentConversation?.members]);

  useEffect(() => {
    socket?.emit('addUser', user._id);
    socket?.on('getUsers', socketUsers => {
      setOnlineUsers(
        user.following.filter(f => socketUsers.some(u => u.userId === f))
      );
    })
  }, [socket, user._id, user.following]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === '') return
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentConversation._id,
    }

    const receiverId = currentConversation.members.find(member => member !== user._id)

    socket?.emit('sendMessage', {
      senderId: user._id,
      receiverId: receiverId,
      text: newMessage
    });

    try {
      const res = await axios.post(`${API}messages`, message)
      setMessages([...messages, res.data])
      setNewMessage('')
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${API}conversations/${user._id}`);
        setConversations(res.data)
      } catch (e) {
        console.log(e);
      }
    }
    getConversations();
  }, [API, user._id])


  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(`${API}messages/${currentConversation?._id}`);
        setMessages(res.data)
      } catch (e) {
        console.log(e);
      }
    }
    getMessages();
  }, [API, currentConversation])

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  })


  return (
    <div>
      <Header />
      <div className="chatContainer">
        {currentConversation ? (<div className={`messagesContainer ${glass}`}>
          <div className='chatTop'>
            {
              messages.map(m => (
                <div key={m._id+`${Math.random()}`} ref={scrollRef} >
                  <Message message={m} own={m.sender === user._id ? true :false } />
                </div>
              ))
            }


          </div>
          <form onSubmit={handleSubmit} className='chatForm'>
            <input onChange={e=>setNewMessage(e.target.value)} placeholder='Write Something' type="text" className={`chatInput ${lightText} ${glass2}`} />
            <button  className={`chatButton ${lightText} ${glass2}`}>Send</button>
          </form>
        </div>) : (
          <div className={`noConversationContainer messagesContainer ${glass} `}>
            <p className={`noConversationText ${lightText}`}>Open a conversation!</p>
          </div>
        )}
        <ChatSideBar conversations={conversations} setCurrentConversation={setCurrentConversation} onlineUsers={onlineUsers} />
      </div>
    </div>
  );
}
