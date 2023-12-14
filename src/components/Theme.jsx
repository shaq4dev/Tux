import React from 'react'

const Theme = ({ toggle, handleClick}) => {

  return (
    <>
        {
            toggle === false ? (
                <button className="bg-purple-500 text-white text-2xl w-20 h-20 -skew-x-[20deg] shadow-around transition-all" onClick={handleClick}>
                    ☀
                </button>
            ) :
            (
                <button className="bg-blue-950 text-white text-2xl w-20 h-20 skew-x-[20deg] shadow-around transition-all" onClick={handleClick}>☾</button>
            )
        }
    </>
  )
}

export default Theme
