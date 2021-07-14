import { useContext, useState, createContext } from 'react';

export const ChatContext = createContext();

export const useChat = () => useContext(ChatContext);

const ChatProvider = ({ children }) => {
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState([]);
  const [chattingFriend, setChattingFriend] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [userCode, setUserCode] = useState('');
  const [userCodeIncoming, setUserCodeIncoming] = useState('');

  return (
    <ChatContext.Provider
      value={{
        onlineUsers,
        setOnlineUsers,
        conversations,
        setConversations,
        currentConversation,
        setCurrentConversation,
        newMessage,
        setNewMessage,
        messages,
        setMessages,
        arrivalMessage,
        setArrivalMessage,
        chattingFriend,
        setChattingFriend,
        showEditor,
        setShowEditor,
        userCode,
        setUserCode,
        userCodeIncoming,
        setUserCodeIncoming
      }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
