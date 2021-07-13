import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './notFound.scss'

export default function NotFound() {
  const {lightText} = useTheme()
  return (
    <div className="notFound">
      <p className={`notFoundText ${lightText}`}>404 - lost in space 👽</p>
    </div>
  )
}
