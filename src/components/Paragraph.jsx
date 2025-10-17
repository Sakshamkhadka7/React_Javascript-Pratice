import React from 'react'
import { useSelector } from 'react-redux'

const Paragraph = () => {
 
 const {counterVal}= useSelector(store => store.counter);
 

  return (
<p> Counter Current Value Screen {counterVal}</p>
  )
}

export default Paragraph