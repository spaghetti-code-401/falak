import React from 'react'
import OnlineFriends from './OnlineFriends';
import './chatSideBar.scss'
import Conversations from './Conversations'
import { useTheme } from '../context/ThemeContext';

export default function ChatSideBar() {
    const {glass} = useTheme()
    return (
        <div className={`chatSideBar ${glass}`}>
          <OnlineFriends />
          <Conversations/>
        </div>
      );
}
