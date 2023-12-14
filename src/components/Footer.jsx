import React from 'react'
import Copyright from './Copyright'
import FooterSectionOne from './FooterSectionOne'
import FooterSectionTwo from './FooterSectionTwo'
import FooterSectionThree from './FooterSectionThree'

const Footer = () => {
  return (
    <div className='flex flex-col justify-between bg-gradient-to-b from-cyan-900 to-blue-950 h-1/2'>
        <div className="section__holder flex pb-20">
            <div className="section__one px-10 w-1/3">
                <FooterSectionOne/>
            </div>
            <div className="section__two px-10 w-1/3">
                <FooterSectionTwo/>
            </div>
            <div className="section__three px-10 w-1/3">
                <FooterSectionThree/>
            </div>
        </div>
        <Copyright/>
    </div>
  )
}

export default Footer
