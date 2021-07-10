import React from 'react'
import Post from './Post'
import Share from './Share'
import './feed.scss'

export default function Feed() {
  return (
    <div className="feed glass">
      <Share />
      <Post postImg="/images/2.jpg"/>
      <Post postImg="/images/3.jpg"/>
      <Post />
    </div>
  )
}
