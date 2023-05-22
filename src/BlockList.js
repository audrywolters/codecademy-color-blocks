import React, { useState } from 'react'
import './Block.css'

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'DarkTurquoise', 'Thistle', 'SpringGreen', 'BurlyWood', 'PapayaWhip', 'MistyRose'];

function BlockList() {
	const [blockList, setBlockList] = useState([])

	const handleClickNewBlock = () => {
	  setBlockList((prev) => {
		return [{
				id: Date.now(), 
				color: colorNames[Math.floor(Math.random() * 9)]
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
					<div className='block' key={block.id} style={{backgroundColor: block.color}} onClick={() => handleClickRemove(block.id)}></div>
				))}
			</div>
		</>
	)
}

export default BlockList