import React, { useState } from 'react'
import './Block.css'

function App() {
  const [blocks, setBlocks] = useState([])

  const handleClickNewBlock = () => {
    setBlocks((prev) => {
      return [{id: Date.now(), color: Math.floor(Math.random() * 10)}, ...prev]
    })
  }

  return (
    <div>
      <button onClick={handleClickNewBlock}>New Block</button>
      {blocks.map((block) => (
        <div className='block' key={block.id}>{block.color}</div>
      ))}
    </div>
  )
}

export default App
