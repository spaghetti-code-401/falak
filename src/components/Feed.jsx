import React from 'react'
import Post from './Post'
import Share from './Share'
import './feed.scss'
import { useTheme } from '../context/ThemeContext'

export default function Feed() {
  const {glass} = useTheme()
  return (
    <div className={`feed ${glass}`}>
      <Share />
      <Post postImg="/images/2.jpg"/>
      <Post postImg="/images/3.jpg"/>
      <Post />
    </div>
  )
}
