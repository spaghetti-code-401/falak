import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './onlineFriends.scss';

export default function OnlineFriends() {
  const {lightText} = useTheme()
  return (
    <div className="onlineFriends">
      <h3 className={`onlineFriendsHeader ${lightText}`}>Online Friends:</h3>

      <div className="onlineFriend" >
        <img
          className="onlineFriendPic"
          src="/images/test.jpg"
          alt=""
        />
        <div className="greenDot"></div>
        <p className={`onlineFriendUsername ${lightText}`}>username ibn flaan</p>
      </div>
    </div>
  );
}
