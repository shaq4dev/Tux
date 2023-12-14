import React from 'react'

let count = 0

const Socials = () => {
  return (
    <div className='py-5'>
      <p className="text-[14px] py-2">
        Follow Us
      </p>
      <ul className='flex'>
        {
            socials.map(item => {
                return (
                    <li key={count--} className='flex justify-center items-center rounded-full text-2xl bg-[rgba(255,255,255,0.2)] w-10 h-10 mr-10 hover:bg-purple-500 hover:cursor-pointer transition-all'>
                        <a href={item.link}>
                          {item.icon}
                        </a>
                    </li>
                )
            })
        }
      </ul>
      
    </div>
  )
}

export default Socials

const socials = [
    {media:'Instagram', link:'#', icon:'Ig'},
    {media:'LinkedIn', link:'#', icon:'In'},
    {media:'X', link:'#', icon:'X'},
    {media:'Youtube', link:'#', icon:'▷'}
]