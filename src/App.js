import React, { useState } from 'react'
import Block from './Block'
import './Block'

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

function App() {

  const [blockList, setBlockList] = useState([])

  const handleClickNewBlock = () => {
    setBlockList((prev) => {
      return [{
              id: Date.now(), 
              color: colorNames[Math.floor(Math.random() * 9)],
              handleClick: handleClickRemove
              }, ...prev]
    })
  }

  const handleClickRemove = (idToRemove) => {
    setBlockList((prev) =>  prev.filter(
      (block) => block.id !== idToRemove
    ))
  }

  return (
    <>
    <button onClick={handleClickNewBlock}>New Block</button>
    <div className='blockContainer'>
      {blockList.map((block) => (
          <>
          <div className='block' key={block.id} style={{backgroundColor: block.color}} onClick={() => handleClickRemove(block.id)}></div> 
          {/* <Block blockProps={block} /> */}
          </>
      ))}
    </div>
    </>
  )
}

export default App
