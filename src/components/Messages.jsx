import React from 'react'
import { useTheme } from '../context/ThemeContext'
import ChatForm from './ChatForm'
import ChatTop from './ChatTop'
import './messages.scss'

export default function Messages() {
    const {glass} = useTheme()
    
    return (
        <div className={`messagesContainer ${glass}`}>
            <ChatTop/>
            <ChatForm/>
        </div>
    )
}
