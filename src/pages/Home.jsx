import React from 'react';
import Header from '../components/Header';
import Feed from '../components/Feed';
import Share from '../components/Share';
import Post from '../components/Post';
import SideBar from '../components/SideBar';
import './home.scss';

export default function Home() {
  return (
    <>
      <Header />
      <div className="homeContainer">
        <Feed />
        <SideBar />
      </div>
    </>
  );
}
