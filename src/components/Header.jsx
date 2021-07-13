import React, { useState } from 'react';
import './header.scss';
import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import { SearchOutlined } from '@material-ui/icons';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import usePF from '../hooks/usePF';
import { Link } from 'react-router-dom';
import DarkModeToggle from "react-dark-mode-toggle";
import { useEffect } from 'react';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const [onLoad, setOnLoad] = useState(true);

  const { user } = useAuth();
  const {
    glass,
    setGlass,
    glass2,
    setGlass2,
    lightText,
    setLightText,
    background,
    setBackground
  } = useTheme();
  const PF = usePF();

  const handleLogout = () => {
    localStorage.setItem('socialUser', null);

    window.location.reload();
  };
  useEffect(() => {
    if (!onLoad) {
      glass === 'glass' ? setGlass('glassLight') : setGlass('glass');
      glass2 === 'glass2' ? setGlass2('glassLight2') : setGlass2('glass2');
      lightText === '' ? setLightText('lightText') : setLightText('');
      background === 'background'
        ? setBackground('backgroundLight')
        : setBackground('background');

    }
    setOnLoad(false)
  }, [isDarkMode])

  // const handleSetTheme = () => {
  //   glass === 'glass' ? setGlass('glassLight') : setGlass('glass');
  //   glass2 === 'glass2' ? setGlass2('glassLight2') : setGlass2('glass2');
  //   lightText === '' ? setLightText('lightText') : setLightText('');
  //   background === 'background'
  //     ? setBackground('backgroundLight')
  //     : setBackground('background');

  // };
  return (
    <header className={`header ${glass}`}>
      <Link to="/">
        <div className={`headerLogo ${lightText}`}>falak</div>
      </Link>
      <div className={`headerSearch ${glass2}`}>
        <SearchOutlined
          className={
            lightText
              ? `headerSearchIcon ${lightText} dimmed`
              : 'headerSearchIcon'
          }
        />
        <input
          type="text"
          placeholder="search"
          className={`headerSearchInput ${lightText}`}
        />
      </div>
      <div className="headerRight">
        <Link to="/">
          <div className="headerIconContainer">
            <HomeIcon className={`homeIcon ${lightText}`} />
            <p className={lightText}>Home</p>
          </div>
        </Link>
        <div className="headerIconContainer">
          <Link to="/chat">
            <TextsmsIcon className={`messageIcon ${lightText}`} />
          </Link>
          <p className={lightText}>Chat</p>
        </div>
        <div className="headerIconContainer">
          <ExitToAppIcon onClick={handleLogout} className={`logout ${lightText}`} />
          <p className={lightText}>Logout</p>
        </div>
        <div className="headerIconContainer">
          <DarkModeToggle className='themeSwitch'
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={40}
            speed={1}
          />
          <p className={lightText}>Theme</p>
        </div>

        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + 'person/noAvatar.png'
            }
            alt=""
            className="headerUserImage"
          />
        </Link>

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
