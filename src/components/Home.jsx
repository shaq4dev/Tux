import { React, useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'
import Header from './Header'
import Introduction from './Introduction'
import Navigation from './Navigation'
import CardPack from './CardPack'
import Footer from './Footer'

const Home = () => {

  const [toggle, setToggle] = useState(false)

  const darkMode = toggle ? {
    textDarkBg: 'text-[#fff]', 
    textDark: 'text-[#121212]',
    textPurp: 'text-purple-400',
    darkBgGradient: 'bg-gradient-to-bl from-blue-900 to-purple-800',
    darkBgColor: 'bg-blue-950',
    darkPlaceholderBg: 'placeholder:bg-[#121212]', 
    darkPlaceholderText: 'placeholder:text-[#fff]',
    toggleSwitchDark: 'bg-blue-950',
    darkBorder: 'border-white'
  } : {
    textLightBg: 'text-[#121212]', 
    textLight: 'text-[#fff]',
    searchTextLight: 'text-purple-500',
    lightBgGradient: 'bg-gradient-to-br from-cyan-500 to-purple-400',
    lightBgColor: 'bg-[#fff]',
    lightPlaceholderBg: 'placeholder:bg-white', 
    lightPlaceholderText: 'placeholder:text-red-500',
    toggleSwitchLight: 'bg-blue-950'
  }

  function handleClick(){
        setToggle(!toggle)
        console.log(toggle)
    }

  return (
    <ThemeContext.Provider value={darkMode}>
        <div className='overflow-y-hidden'>
        <Navigation toggle={toggle} handleClick={handleClick}/>
        <section className='bg-blue-50'>
          <Header/>
        </section>
        <section className={darkMode ? `${darkMode.darkBgColor} ${darkMode.textDarkBg}` : ''}>
          <Introduction/>
        </section>
        <section>
          <CardPack/>
        </section>
        <Footer>
          <Footer/>
        </Footer>
    </div>
    </ThemeContext.Provider>

  )
}

export default Home
