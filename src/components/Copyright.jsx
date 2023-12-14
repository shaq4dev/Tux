import React from 'react'

const Copyright = () => {
  return (
    <div className='w-full bg-[#0c2342]'>
      <div className="copyright flex items-center text-white text-[12px] h-[60px] justify-between px-20">
        <h3>TUX Group of Companies</h3>
        <p>©2023. Tux&More Inc., All Rights Reserved.</p>
        <div className="made">Made by <span className=" text-cyan-300 hover:underline hover:cursor-pointer"><a href="https://www.linkedin.com/in/shaq4dev" target='_blank'>shaq4dev</a></span></div>
      </div>
    </div>
  )
}

export default Copyright
