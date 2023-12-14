import { React, useContext} from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Title = ({ content }) => {

  const title = useContext(ThemeContext)

  return (
    <>
     <h1 className={`text-6xl text-center text-slate-500 pb-24 pt-12 uppercase
      ${title ? `${title.textDarkBg}` : ``} transition-all`}>{content}</h1> 
    </>
  )
}

export default Title
