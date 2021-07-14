import React, { useRef, useEffect, useState } from 'react';
import Header from '../components/Header';
import ChatBox from '../components/ChatBox';
import ChatSideBar from '../components/ChatSideBar';
import './chat.scss';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import useAPI from '../hooks/useAPI';
// import '../components/chatForm.scss';
import '../components/chatTop.scss';
import '../components/message.scss';
import { io } from 'socket.io-client';



import { useChat } from '../context/ChatContext';
import CodeEditor from '../components/CodeEditor';

export default function Chat() {
  const { glass2, lightText, glass } = useTheme();
  const API = useAPI();
  const { user } = useAuth();
  // const newMessage = useRef();
  const scrollRef = useRef();
  const socket = useRef();

  // const [onlineUsers, setOnlineUsers] = useState([]);
  // const [conversations, setConversations] = useState([]);
  // const [currentConversation, setCurrentConversation] = useState(null);
  // const [messages, setMessages] = useState([]);
  // const [arrivalMessage, setArrivalMessage] = useState([]);
  // const [chattingFriend, setChattingFriend] = useState(null);
  // const [showEditor, setShowEditor] = useState(false);
  // const [userCode, setUserCode] = useState('');
  // const [userCodeIncoming, setUserCodeIncoming] = useState('');

  const {
    onlineUsers,
    setOnlineUsers,
    conversations,
    setConversations,
    currentConversation,
    setCurrentConversation,
    messages,
    setMessages,
    arrivalMessage,
    setArrivalMessage,
    newMessage,
    setNewMessage,
    chattingFriend,
    setChattingFriend,
    showEditor,
    setShowEditor,
    userCode,
    setUserCode,
    userCodeIncoming,
    setUserCodeIncoming
  } = useChat();

  useEffect(() => {
    socket.current = io('https://falak-socket.herokuapp.com/');
    // socket.current = io('http://localhost:8900/');
    socket.current.on('getMessage', (data) => {
      // console.log('getMessage');
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
    socket.current.on('getCode', (data) => {
      // data.senderId !== user._id &&
      //   setUserCode(data.text) &&
      //   setUserCodeIncoming(data.text);
      setUserCode(data.text);
      setUserCodeIncoming(data.text);
      console.log('RECEIVED');
    });
    // console.log('IN CHAT COMPONENT');
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation?.members]);

  useEffect(() => {
    socket.current?.emit('addUser', user._id);
    socket.current?.on('getUsers', (socketUsers) => {
      // console.log('getUsers');
      setOnlineUsers(
        user.following.filter((f) => socketUsers.some((u) => u.userId === f))
      );
    });
  }, [socket, user._id, user.following]);


  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(`${API}conversations/${user._id}`);
        setConversations(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getConversations();
  }, [API, user?._id]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios.get(
          `${API}messages/${currentConversation?._id}`
        );
        setMessages(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    getMessages();
  }, [API, currentConversation]);

  useEffect(() => {
    const friendId = currentConversation?.members.find((m) => m !== user._id);
    const fetchFriendData = async () => {
      try {
        const res = await axios.get(`${API}users?userId=${friendId}`);
        setChattingFriend(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchFriendData();
  }, [API, currentConversation?.members, user._id]);

  function NoConversation() {
    return (
      <div className={`noConversationContainer messagesContainer ${glass} `}>
        <p className={`noConversationText ${lightText}`}>
          Open a conversation 👽
        </p>
      </div>
    );
  }

  useEffect(() => {
    setShowEditor(false);
  }, [currentConversation]);

  return (
    <div>
      <Header />
      <div className="chatContainer">
        {currentConversation && !showEditor ? (
          <ChatBox
          socket={socket}
          // handleSubmit={handleSubmit}
          />
        ) : currentConversation && showEditor ? (
          <CodeEditor socket={socket} />
        ) : (
          <NoConversation />
        )}
        <ChatSideBar
          conversations={conversations}
          setCurrentConversation={setCurrentConversation}
          onlineUsers={onlineUsers}
        />
      </div>
    </div>
  );
}
