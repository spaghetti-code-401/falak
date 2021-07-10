import React from 'react'
import Header from '../components/Header'
import Post from '../components/Post'
import Share from '../components/Share'
import SideBar from '../components/SideBar'
import './home.scss'

export default function Home() {
  return (
    <>
      <Header />
      <Post />
      <Share />
      <SideBar />
    </>
  )
}
