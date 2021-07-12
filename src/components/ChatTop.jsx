import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './chatTop.scss'
export default function ChatTop() {
    const {glass2, lightText} = useTheme()
    
    return (
        <div className='chatTop'>
            <div className='message'>
                <div className='messageLeft'>
                    <img src="/images/test.jpg" alt="" />
                </div>
                <div className='messageRight'>
                    <p className={`messageContent ${lightText} ${glass2}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus dolores, vero deleniti quod vel et! Doloribus..</p>
                </div>
            </div>
        </div>
    )
}
