import { React, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext.jsx'

const Search = () => {

  const lookUp = useContext(ThemeContext)

  return (
    <>
        <input type="text" className={`w-1/4 ${lookUp ?
           `${lookUp.darkBgColor} 
            ${lookUp.darkPlaceholderText} 
            ${lookUp.textDarkBg}` :
           `${lookUp.lightPlaceholderBg}  
            ${lookUp.lightPlaceholderText} 
            ${lookUp.searchTextLight}`} 
            outline-none rounded-lg px-5 py-2 text-[18px] transition-all`} placeholder='Search...'/>
    </>
  )
}

export default Search
