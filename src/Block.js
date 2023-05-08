import React from 'react'
import './Block.css'

function Block(props) {
	return (
		<div className='block' 
			 key={props.blockProps.id}
			 style={{backgroundColor: props.blockProps.color}}
			 onClick={() => props.blockProps.handleClick(props.blockProps.id)}
			 ></div>
	)
}

export default Block