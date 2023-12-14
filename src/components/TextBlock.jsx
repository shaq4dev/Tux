import React from 'react'
import Button from './Button'

const TextBlock = ( {content,
     style,
     title,
     btnContent, 
     btnStyles
     }) => {
  return (
    <div className={style}>
        <Sub title={title}/>
      {content}
      <Button
      content={btnContent}
      styles={btnStyles}
      />
    </div>
  )
}

export default TextBlock

function Sub({title}){
    return (
        <div className="sub">
            <h2 className='font-black text-4xl pb-8'>
                {title}
            </h2>
        </div>
    )
}