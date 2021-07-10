import React from 'react';
import './header.scss';
import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { SearchOutlined } from '@material-ui/icons';
import useTheme from '../hooks/useTheme';

export const Header = () => {
  const { glass, glass2, lightText, setGlass, setGlass2, setLightText } =
    useTheme();
  
  const handleSetTheme = () => {
    glass === 'glass' ? setGlass('glassLight') : setGlass('glass');
    glass2 === 'glass2' ? setGlass2('glassLight2') : setGlass2('glass2');
  }
  return (
    <header className={`header ${glass}`}>
      <div className="headerLogo">social</div>
      <div className={`headerSearch ${glass2}`}>
        <SearchOutlined className="headerSearchIcon" />
        <input type="text" placeholder="search" className="headerSearchInput" />
      </div>
      <div className="headerRight">
        <HomeIcon className="homeIcon" />
        <TextsmsIcon className="messageIcon" />
        <p className="logOut">Logout</p>
        <p className="setTheme" onClick={handleSetTheme}>setTheme</p>
        {/* <AccountCircleIcon className="avatarIcon" /> */}
        <img src="/images/test.jpg" alt="" className="headerUserImage" />
        {/* <div className="headerDropdown glass2">
          <p className="dropdownProfile">Profile</p>
          <p className="dropdownLogout">Logout</p>
          <p className="dropdownTheme">Theme</p>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
