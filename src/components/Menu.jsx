import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

let count = 0
let countId = 100

const Menu = () => {

  const textCol = useContext(ThemeContext)

  return (
    <div>
      <ul className={`flex justify-center ${textCol ? `${textCol.textPurp}` : ''} text-white text-[22px] transition-all`}>
        {
            menu.map(item => {
                return (
                    <li key={count++} className='px-4 py-[15px] hover:cursor-pointer' id={item.id}
                    >
                        <a href={item.link}>
                            {item.title}
                        </a>
                    </li>
                )
            })
        }
      </ul>
      <div 
      className='dropdown absolute top-[80px] left-[465px] w-64 hidden'
      id='dropdown'
      >
        <ul>
          {
            menu[2].product.map(item => {
              return (
                <li 
                key={countId++} 
                className='text-[22px] pl-5 w-full py-[15px] hover:cursor-pointer bg-blue-900 hover:bg-blue-950 text-white transition-all '
                >
                  <a href={item.link} className='pr-20 py-2'>
                    {item.stock}
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  )
}

export default Menu

export const menu = [
    {
            title: 'Home', 
            link: '#',
            id: 'home'
    },
    {
            title: 'About', 
            link: '#',
            id: 'about'
    },
    {
            title: 'Pricing', 
            link: '#',
            id: 'pricing',
            product: [
                {stock: 'Shoes', link: '#'},
                {stock: 'Watches', link: '#'},
                {stock: 'Tuxedos', link: '#'},
                {stock: 'Rings', link: '#'},
            ]
    },
    {
            title: 'Contact', 
            link: '#',
            id: 'contact'
        }
]