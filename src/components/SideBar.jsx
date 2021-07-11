import React from 'react';
import { useTheme } from '../context/ThemeContext';
import OnlineFriends from './OnlineFriends';
import './sideBar.scss';

export default function SideBar() {
  const {glass} = useTheme()
  return (
    <div className={`sideBar ${glass}`}>
      <OnlineFriends />
    </div>
  );
}
