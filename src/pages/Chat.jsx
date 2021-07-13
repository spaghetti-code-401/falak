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
import '../components/chatForm.scss';
import '../components/chatTop.scss';
import '../components/message.scss';
import { io } from 'socket.io-client';

import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-dracula';

export default function Chat() {
  const { glass2, lightText, glass } = useTheme();
  const API = useAPI();

  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [messages, setMessages] = useState([]);
  const newMessage = useRef();
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const scrollRef = useRef();
  const { user } = useAuth();
  const [chattingFriend, setChattingFriend] = useState(null);
  const socket = useRef();
  const [showEditor, setShowEditor] = useState(true);

  useEffect(() => {
    socket.current = io('https://falak-socket.herokuapp.com/');
    socket.current.on('getMessage', (data) => {
      console.log('getMessage');
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now()
      });
    });
    console.log('IN CHAT COMPONENT');
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentConversation?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentConversation?.members]);

  useEffect(() => {
    socket.current?.emit('addUser', user._id);
    socket.current?.on('getUsers', (socketUsers) => {
      console.log('getUsers');
      setOnlineUsers(
        user.following.filter((f) => socketUsers.some((u) => u.userId === f))
      );
    });
  }, [socket, user._id, user.following]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage.current.value) return;
    const message = {
      sender: user._id,
      text: newMessage.current.value,
      conversationId: currentConversation._id
    };

    const receiverId = currentConversation.members.find(
      (member) => member !== user._id
    );

    try {
      socket.current.emit('sendMessage', {
        senderId: user._id,
        receiverId: receiverId,
        text: newMessage.current.value
      });
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.post(`${API}messages`, message);
      setMessages([...messages, res.data]);
      e.target.reset();
    } catch (e) {
      console.log(e);
    }
  };

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
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);

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

  function ChatBox() {
    return (
      <div className={`messagesContainer ${glass}`}>
        <div className="chatTop">
          {messages.map((m, i) => (
            <div key={m._id + `${Math.random()}`} ref={scrollRef}>
              <Message
                message={m}
                own={m.sender === user._id ? true : false}
                chattingFriend={chattingFriend}
                noImg={i && m.sender === messages[i - 1].sender ? 'noImg' : ''}
              />
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="chatForm">
          <input
            ref={newMessage}
            placeholder="Write Something"
            type="text"
            className={`chatInput ${lightText} ${glass2}`}
          />
          <button className={`chatButton ${lightText} ${glass2}`}>Send</button>
        </form>
      </div>
    );
  }

  function CodeEditor() {
    return (
      <div className={`aceEditorContainer ${glass}`}>
        <AceEditor
          className={`${glass2}`}
          mode="javascript"
          theme="dracula"
          // onChange={onChange}
          name="aceEditor"
          height="70%"
          width="100%"
          fontSize="16px"
          wrapEnabled={true}
          enableBasicAutocompletion={true}
          enableLiveAutocompletion={true}
          enableSnippets={true}
          // showGutter={false}
          // editorProps={{ $blockScrolling: true }}
          style={{ padding: '20px' }}
        />
        <div className={`console ${glass2}`}>
          <div className="consoleLeft">
            <button className={`runCodeButton ${lightText} ${glass2}`}>
              run {'>'}
            </button>
          </div>
          <div className={`consoleRight ${glass2}`}></div>
        </div>
      </div>
    );
  }

  function NoConversation() {
    return (
      <div className={`noConversationContainer messagesContainer ${glass} `}>
        <p className={`noConversationText ${lightText}`}>
          Open a conversation 👽
        </p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <div className="chatContainer">
        {currentConversation && !showEditor ? (
          <ChatBox />
        ) : currentConversation && showEditor ? (
          <CodeEditor />
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
