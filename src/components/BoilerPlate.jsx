import React from 'react'
import { menu } from './Menu'

let count = 0

const BoilerPlate = () => {
  return (
    <div className='w-full text-white'>
      <h2 className="font-black text-3xl py-8 text-center">Links</h2>
      <ul className='mb-16 text-lg'>

        {
            menu.map(item => {
               return (
                 <li key={count--} className='py-2 text-center'>
                    <a href={item.link} className='hover:text-cyan-300 hover:underline text-2xl'>
                        {item.title}
                    </a>
                </li>
               )
            })
        }
        <li className='py-2 text-center'>
            <a href='#'className='hover:text-cyan-300 hover:underline text-2xl'>
                Privacy Policy
            </a>
        </li>
        <li className='py-2 text-center'>
            <a href='#'className='hover:text-cyan-300 hover:underline text-2xl'>
                Terms of Use
            </a>
        </li>
        <li className='py-2 text-center'>
            <a href='#' className='hover:text-cyan-300 hover:underline text-2xl'>
                Cookies Policy
            </a>
        </li>
      </ul>
    </div>
  )
}

export default BoilerPlate
