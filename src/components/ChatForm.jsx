import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './chatForm.scss';

export default function ChatForm() {
  const { glass2, lightText } = useTheme();
  return (
    <form className="chatForm">
      <input
        placeholder="Write Something"
        type="text"
        className={`chatInput ${lightText} ${glass2}`}
      />
      <button className={`chatButton ${lightText} ${glass2}`}>Send</button>
    </form>
  );
}
