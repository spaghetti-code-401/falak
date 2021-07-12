import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext'
import useAPI from '../hooks/useAPI';
import usePF from '../hooks/usePF';
import { format } from 'timeago.js'
import './message.scss'

export default function Message({ message, own }) {
  const [user, setUser] = useState();
  const PF = usePF();

  const { user: currentUser } = useAuth();
  const API = useAPI()
  const { glass2, lightText } = useTheme();

  useEffect(() => {
    if (own) return;
    const fetchFriendData = async () => {
      try {
        const res = await axios.get(`${API}users?userId=${message.sender}`);
        setUser(res.data)
      } catch (e) {
        console.log(e);
      }
    }
    fetchFriendData();
  }, [API, message.sender, own])

  return (
    <div>
      <div className={own ? `message own` : `message` }>
        <div className='messageLeft'>
          <img className='messageImg' src="/images/test.jpg" alt="" />

          <div className={glass2}>
            <p className={`messageContent ${lightText}`}>{message.text}</p>
          </div>
        </div>
        <div className="messageBottom">
          {format(message.createdAt)}
        </div>
      </div>
    </div>
  )
}
