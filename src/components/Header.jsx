import React from 'react';
import './header.scss';
import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { SearchOutlined } from '@material-ui/icons';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import usePF from '../hooks/usePF';
import { Link } from 'react-router-dom';

export const Header = () => {
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
    localStorage.setItem('socialUser', null)

    window.location.reload()
  }

  const handleSetTheme = () => {
    glass === 'glass' ? setGlass('glassLight') : setGlass('glass');
    glass2 === 'glass2' ? setGlass2('glassLight2') : setGlass2('glass2');
    lightText === '' ? setLightText('lightText') : setLightText('');
    background === 'background'
      ? setBackground('backgroundLight')
      : setBackground('background');
  };
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
          <HomeIcon className={`homeIcon ${lightText}`} />
        </Link>
        <Link to="/chat">
          <TextsmsIcon className={`messageIcon ${lightText}`} />
        </Link>
        <p onClick={handleLogout} className={`logout ${lightText}`}>Logout</p>
        <p className={`setTheme ${lightText}`} onClick={handleSetTheme}>
          setTheme
        </p>
        {/* <AccountCircleIcon className="avatarIcon" /> */}
        <Link to={`/profile/${user.username}`}>
          <img
            src={PF + user.profilePicture}
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
