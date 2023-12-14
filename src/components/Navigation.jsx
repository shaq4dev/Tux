import React from 'react'
import Menu from './Menu'
import Search from './Search'
import Theme from './Theme'
import { useState, useEffect } from 'react'
import Logo from './Logo'

const Navigation = ({ toggle, handleClick}) => {

    const [show, setShow] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)

    function handleNav(){
        if(window.scrollY > lastScrollY) {
            setShow(false)
        } else {
            setShow(true)
        }

        setLastScrollY(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleNav)
    },[handleNav])

  return (
    <>
        <nav className={`fixed w-full h-20 shadow-lg px-8 py-5 flex justify-between items-center ${show ? 'top-0' : '-top-20'} transition-all`}>
        <div className="p-2">
          <Logo/>
        </div>
        <Menu/>
        <Search/>
        <Theme toggle={toggle} handleClick={handleClick}/>
      </nav>
    </>
  )
}

export default Navigation
