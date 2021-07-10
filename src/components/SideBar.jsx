import React from 'react'
import OnlineFriends from './OnlineFriends'
import '../css/sideBar.scss'
import '../css/onlineFriends.scss'

export default function SideBar() {
    return (
        <div className='sideBar'>
            <div className='sideBarWrapper'>
                <OnlineFriends/>
            </div>
        </div>
    )
}
