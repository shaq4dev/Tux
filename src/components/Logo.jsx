import { React, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Logo = () => {

  const icon = useContext(ThemeContext)

  return (
    <div className={`text-36 w-16 h-16 font-black flex justify-center items-center rounded-lg border-solid border-4
    ${icon ? 
    `${icon.textDarkBg} 
     ${icon.darkBgGradient}
     ${icon.darkBorder}` : 
    ``}
    text-white bg-gradient-to-br from-cyan-500 to-purple-400 border-purple-700 transition-all
    `}>
      <p>TUX</p>
    </div>
  )
}

export default Logo
