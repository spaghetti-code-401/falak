import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useAuth } from '../context/AuthContext';
import { useChat } from '../context/ChatContext';
import { useTheme } from '../context/ThemeContext';
import useAPI from '../hooks/useAPI';
import Message from './Message';

export default function ChatBox({socket}) {
  const { glass2, lightText, glass } = useTheme();
  const API = useAPI();
  const { user } = useAuth();
  // const newMessage = useRef();
  const scrollRef = useRef();

  const { messages, setMessages, chattingFriend, setShowEditor, newMessage, setNewMessage, currentConversation } = useChat();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({
      behavior: 'smooth'
    });
  }, [messages]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newMessage) return;
    const message = {
      sender: user._id,
      text: newMessage,
      conversationId: currentConversation._id
    };

    const receiverId = currentConversation.members.find(
      (member) => member !== user._id
    );

    try {
      socket.current.emit('sendMessage', {
        senderId: user._id,
        receiverId: receiverId,
        text: newMessage
      });
    } catch (err) {
      console.log(err);
    }

    try {
      const res = await axios.post(`${API}messages`, message);
      setMessages([...messages, res.data]);
      setNewMessage('');
    } catch (e) {
      console.log(e);
    }

    // newMessage.current.focus()
  };

  return (
    <div className={`messagesContainer ${glass}`}>
      <button
        onClick={() => setShowEditor(true)}
        className={`openCodeEditorButton ${lightText} ${glass2}`}>
        Open code editor
      </button>
      <div className="chatTop">
        {messages.map((m, i) => (
          <div key={m._id + `${Math.random()}`}>
            <Message
              message={m}
              own={m.sender === user._id ? true : false}
              chattingFriend={chattingFriend}
              noImg={i && m.sender === messages[i - 1].sender ? 'noImg' : ''}
            />
          </div>
        ))}
        <div
          className="scrollIntoView"
          ref={scrollRef}
          style={{ all: 'unset' }}></div>
      </div>
      <form onSubmit={handleSubmit} className="chatForm">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write Something"
          type="text"
          className={`chatInput ${lightText} ${glass2}`}
        />
        <button className={`chatButton ${lightText} ${glass2}`}>Send</button>
      </form>
    </div>
  );
}
