import React from 'react'
import Header from '../components/Header'
import ChatSideBar from '../components/ChatSideBar'
import Messages from '../components/Messages'
import './chat.scss'

export default function Chat() {
    return (
        <div>
            <Header/>
            <div className="chatContainer">
                <Messages />
                <ChatSideBar/>
            </div>

        </div>
    )
}
