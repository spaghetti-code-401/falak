import React from 'react';
import OnlineFriends from './OnlineFriends';
import './chatSideBar.scss';
import Conversations from './Conversations';
import { useTheme } from '../context/ThemeContext';

export default function ChatSideBar({
  conversations,
  setCurrentConversation,
  onlineUsers
}) {
  const { glass, lightText } = useTheme();
  return (
    <div className={`chatSideBar ${glass}`}>
      <div className="onlineFriendsContainer">
        <h3 className={`onlineFriendsHeader ${lightText}`}>Online Friends</h3>
        <OnlineFriends
          setCurrentConversation={setCurrentConversation}
          onlineUsers={onlineUsers}
        />
      </div>
      <hr className="chatSidebarHr" />
      <div className="conversationsContainer">
        <h3 className={`conversationsHeader ${lightText}`}>Conversations</h3>
        {conversations.map((c) => (
          <Conversations
            key={c._id}
            conversation={c}
            setCurrentConversation={setCurrentConversation}
          />
        ))}
      </div>
    </div>
  );
}
