import React from 'react'
import ImageBlock from './ImageBlock'
import TextBlock from './TextBlock'

const Card = () => {
  return (
    <div className='bg-white w-1/4 p-5 m-5 mb-10 rounded-md shadow-around'>
      <ImageBlock
      blockStyles='bg-gradient-to-bl from-blue-500 to-red-400 h-64 rounded-lg p-10 shadow-lg mb-8'
      />
      <TextBlock
      title='Lorem, ipsum dolor'
      content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero corrupti quas veritatis, dolorum eveniet?'
      style='text-[20px] text-center'
      btnContent='Visit'
      btnStyles='block m-auto my-7 bg-red-500 text-white px-10 py-2 rounded-md'
      />
    </div>

    
  )
}

export default Card
