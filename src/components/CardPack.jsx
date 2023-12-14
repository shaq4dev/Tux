import React from 'react'
import Title from './Title'
import Card from './Card'

const CardPack = () => {
  return (
    <div className='bg-gradient-to-br from-purple-900 to-cyan-900 pt-10 pb-16 w-full'>
      <Title
      content='Shop with us!'
      style='text-6xl text-center text-white pb-24 pt-12 uppercase'
      />
     <div className="w-full flex justify-center">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
     </div>
    </div>
  )
}

export default CardPack
