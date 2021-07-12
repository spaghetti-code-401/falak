import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import SideBar from '../components/SideBar';
import './home.scss';

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Feed />
        <SideBar user={null} />
      </div>
    </>
  );
}
