import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import './home.scss';

export default function Home() {
  // const {socket, onlineUsers} = useSocket()
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Feed />
        <SideBar
          // onlineUsers={onlineUsers}
          user={null}
        />
      </div>
    </>
  );
}
