import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './conversations.scss';

export default function OnlineFriends() {
  const {lightText} = useTheme()
  return (
    <div className="conversations">
      <h3 className={`conversationsHeader ${lightText}`}>Conversations:</h3>

      <div className="conversation" >
        <img
          className="conversationPic"
          src="/images/test.jpg"
          alt=""
        />
        <p className={`conversationUsername ${lightText}`}>username ibn flaan</p>
      </div>
    </div>
  );
}
