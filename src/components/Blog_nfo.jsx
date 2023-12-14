import React, { useEffect, useState } from 'react'

const Blog_nfo = () => {

  const [result, setResult] = useState('Posts')
  const [items, setItems] = useState([])


  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${result}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [result])

  return (
    <div>
      <Title/>
      <Panel setResult={setResult}/>
      <Results result={result} items={items}/>
    </div>
  )
}

export default Blog_nfo

const Title = () => {
  return (
    <h1 className="text-6xl font-black flex justify-center my-10">My Blog Post</h1>
  )
}

const Panel = ({ setResult }) => {
  return (
    <div className='flex justify-center'>
      <button 
      className="bg-purple-600 hover:bg-purple-500 mx-2 py-3 text-[20px] px-8 rounded-lg transition-all"
      onClick={() =>{setResult('Posts')}}
      >Posts</button>
      <button 
      className="bg-purple-600 hover:bg-purple-500 mx-2 py-3 text-[20px] px-8 rounded-lg transition-all"
      onClick={() =>{setResult('Comments')}}
      >Comments</button>
      <button 
      className="bg-purple-600 hover:bg-purple-500 mx-2 py-3 text-[20px] px-8 rounded-lg transition-all"
      onClick={() =>{setResult('Users')}}
      >Users</button>
    </div>
  )
}

const Results = ({ result, items }) => {
  return (
    <div className="mx-16">
      <h1 className="text-4xl font-black">{result}</h1>
      <h3 className='mx-10 my-12'>
        {
          items.map((item) => {
            return(
              <pre>
              {JSON.stringify(item)}
            </pre>
            )
          })
        }
      </h3>
    </div>
  )
}