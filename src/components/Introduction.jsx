import React from 'react'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'
import Button from './Button'
import Title from './Title'


const Introduction = () => {

  return (
    <div className='px-16 pt-12 pb-24'>
        <Title
        content='Tuxedo'
        />
      <div className="container flex justify-evenly">
        <div className="text w-1/2">
            <TextBlock 
                content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum praesentium expedita consequuntur ipsum tenetur error, quisquam eum in quidem sint provident?
                Doloremque deserunt fuga fugiat minus esse, quidem ab delectus! Et adipisci molestiae error ut maxime illum nemo vitae. Quod cumque dolorum laboriosam dolores, officia magnam corporis! Dolorum, earum corporis!'
                style='text-2xl w-full pr-5'
                title='Lorem, ipsum dolor sit amet consectetur adipisicing elit.'
                btnContent='Read More'
                btnStyles='block bg-purple-500 text-white px-10 py-3 rounded-lg shadow-md hover:bg-red-500 transition-all my-8'
            />
        </div>
        <ImageBlock
        blockStyles='bg-gradient-to-l from-red-500 to bg-purple-600 rounded-lg shadow-2xl h-96 w-1/2'
        />
      </div>
    </div>
  )
}

export default Introduction

