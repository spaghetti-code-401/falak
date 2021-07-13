import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import useAPI from '../hooks/useAPI';
import usePF from '../hooks/usePF';
import { format } from 'timeago.js';
import './message.scss';

export default function Message({ message, own, chattingFriend, noImg }) {
  const { glass2, lightText } = useTheme();
  const [user, setUser] = useState();
  const PF = usePF();

  const { user: currentUser } = useAuth();
  const API = useAPI();

  // useEffect(() => {
  //   if (message.sender === currentUser._id) return;
  //   const fetchFriendData = async () => {
  //     try {
  //       const res = await axios.get(`${API}users?userId=${message.sender}`);
  //       setUser(res.data)
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  //   fetchFriendData();
  // }, [API, currentUser._id, message.sender])

  return (
    <div>
      <div className={own ? `message own` : `message`}>
        <div className="messageTop">
          {own ? (
            <img
              className={`messageImg ${noImg}`}
              src={
                currentUser?.profilePicture
                  ? PF + currentUser.profilePicture
                  : PF + 'person/noAvatar.png'
              }
              alt=""
            />
          ) : (
            <img
              className={`messageImg ${noImg}`}
              src={
                chattingFriend?.profilePicture
                  ? PF + chattingFriend.profilePicture
                  : PF + 'person/noAvatar.png'
              }
              alt=""
            />
          )}

          <div className={`messageTextContainer ${glass2}`}>
            <p className={`messageText ${lightText}`}>{message.text}</p>
            <p className={`messageDate ${lightText}`}>
              {format(message.createdAt)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
