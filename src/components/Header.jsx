import React from 'react'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-900 to-purple-500'>
      <div className="flex px-20 pt-48 pb-24">
        <TextBlock
          content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni ratione, explicabo corrupti temporibus eaque dicta, tempore iste hic perferendis vel, maxime necessitatibus. Sequi pariatur odit dolores quibusdam similique illo debitis.'
          title='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          style='text-2xl w-1/2 pr-5 text-white'
          btnContent='See More'
          btnStyles='block bg-purple-500 text-white px-10 py-3 rounded-lg shadow-md hover:bg-red-500 transition-all my-8'
        />
        <ImageBlock
        blockStyles='bg-gradient-to-l from-red-500 to bg-purple-600 rounded-lg shadow-2xl h-96 w-1/2'
        />
      </div>
      
    </div>
  )
}

export default Header

