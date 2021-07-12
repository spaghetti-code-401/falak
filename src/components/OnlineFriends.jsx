import React from 'react';
import { useTheme } from '../context/ThemeContext';
import usePF from '../hooks/usePF';
import './onlineFriends.scss';

export default function OnlineFriends({user}) {
  const {lightText} = useTheme()
  const PF = usePF()
  return (
      <div className="onlineFriend" >
        <img
          className="onlineFriendPic"
          src={user.profilePicture ? PF+user.profilePicture : PF+'person/noAvatar.png'}
          alt=""
        />
        <div className="greenDot"></div>
        <p className={`onlineFriendUsername ${lightText}`}>{user.username}</p>
      </div>
  );
}
