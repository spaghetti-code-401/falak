import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import useAPI from '../hooks/useAPI';
import usePF from '../hooks/usePF';
import './onlineFriends.scss';

export default function OnlineFriends({ onlineUsers, setCurrentConversation }) {
  const { lightText } = useTheme();
  const PF = usePF();
  const API = useAPI()
  const {user: currentUser} = useAuth()
  const [friends, setFriends] = useState([]);
  const [onlineFriends, setOnlineFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(
          `${API}users/friends/${currentUser._id}`
        );
        setFriends(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [API, currentUser._id]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [friends, onlineUsers]);

  async function handleSetCurrentConversation(friend) {
    try {
      const res = await axios.get(
        `${API}conversations/find/${currentUser._id}/${friend._id}`
      );
      setCurrentConversation(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    {onlineFriends.map(o => (
    <div onClick={() => handleSetCurrentConversation(o)} key={o._id} className="onlineFriend">
      <img
        className="onlineFriendPic"
        src={
          o?.profilePicture
            ? PF + o.profilePicture
            : PF + 'person/noAvatar.png'
        }
        alt=""
      />
      <div className="greenDot"></div>
      <p className={`onlineFriendUsername ${lightText}`}>
        {o?.username}
      </p>
    </div>
    ))}
    </>
  );
}
