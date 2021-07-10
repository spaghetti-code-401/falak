import { useState } from "react"

const useTheme = () => {
  const [glass, setGlass] = useState('glass')
  const [glass2, setGlass2] = useState('glass2')
  const [lightText, setLightText] = useState('')

  return {glass, glass2, lightText, setGlass, setGlass2, setLightText}
}

export default useTheme