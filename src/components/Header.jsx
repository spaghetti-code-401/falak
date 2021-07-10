import React from 'react';
import './header.scss';
import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { SearchOutlined } from '@material-ui/icons';

export const Header = () => {
  return (
    <header className="header glass">
      <div className="headerLogo">social</div>
      <div className="headerSearch glass2">
        <SearchOutlined className="headerSearchIcon"/>
        <input type="text" placeholder="search" className="headerSearchInput" />
      </div>
      <div className="headerIcons">
        <HomeIcon className="homeIcon" />
        <TextsmsIcon className="messageIcon" />
        <p className="logOut">Logout</p>
        {/* <AccountCircleIcon className="avatarIcon" /> */}
        <img src="/images/test.jpg" alt="" className="headerUserImage" />
      </div>
    </header>
  );
};

export default Header;
