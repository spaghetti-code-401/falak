import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import useAPI from '../hooks/useAPI';
import usePF from '../hooks/usePF';
import './conversations.scss';

export default function OnlineFriends({ setCurrentConversation, conversation }) {
  const API = useAPI()
  const { lightText } = useTheme();
  const [user, setUser] = useState(null)
  const { user: currentUser } = useAuth();
  const PF = usePF();

  useEffect(() => {
    const friendId = conversation.members.find(m => m !== currentUser._id);
    const fetchFriendData = async () => {
      try {
        const res = await axios.get(`${API}users?userId=${friendId}`);
        setUser(res.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchFriendData();
  }, [API, conversation.members, currentUser._id])

  return (
    

      <div onClick={() => setCurrentConversation(conversation)} key={conversation._id} className="conversation" >
        <img
          className="conversationPic"
          src={user?.profilePicture? PF+user.profilePicture:PF+'person/noAvatar.png'}
          alt=""
        />
        <p className={`conversationUsername ${lightText}`}>{user?.username}</p>
      </div>

  );
}
