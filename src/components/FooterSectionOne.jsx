import React from 'react'
import Logo from './Logo'
import Socials from './Socials'
import Button from './Button'

const FooterSectionOne = () => {
  return (
    <div className=''>
      <div className="pt-20 pb-8">
        <Logo/>
      </div>
      <h2 className='text-white text-3xl pb-5'>Get in touch</h2>
        <p className="git text-white text-lg pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam non distinctio eaque officia animi adipisci illum possimus maiores blanditiis voluptatum!
        </p>
      <div className="news__letter">
        <h2 className='text-white text-3xl pb-2'>Subscribe to our Newsletter</h2>
        <input 
        type="email" 
        placeholder='Email'
        className='w-[78%] h-12 bg-[rgba(255,255,255,0.1)] outline-none placeholder:text-white placeholder:text-lg p-3 text-white text-lg rounded-md'/>
        <Button
        content='Subscribe'
        styles='inline-block bg-white my-5 ml-2 h-12 w-1/5 rounded-md hover:bg-purple-500 hover:text-white transition-all'
        />
      </div>
      <div className="text-white">
        <Socials/>
      </div>
    </div>
  )
}

export default FooterSectionOne

