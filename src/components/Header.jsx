import React from 'react'
import '../css/header.scss'
import HomeIcon from '@material-ui/icons/Home';
import TextsmsIcon from '@material-ui/icons/Textsms';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Header = () => {
    return (
        <header className="header">
            <div className="headerWrapper">
                <div className="headerLogo" >Social</div>
                <div className="headerSearch" >
                    <input type="text" placeholder="search" className="searchHeaderInput" />
                </div>
                <div className="headerIcons" >
                    <HomeIcon className="homeIcon"/>
                    <TextsmsIcon className="messageIcon"/>
                    <p className="logOut">Logout</p>
                    <AccountCircleIcon className="avatarIcon"/>
                </div>
            </div>
        </header>
    )
}

  
export default Header;