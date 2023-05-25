import React from 'react'

import "./CardEstudos.css"

function CardEstudos({titulo, lugar}) {
  return (
    <div className='card shadow'>
      <h1>{titulo}</h1>
      <p>{lugar}</p>
    </div>
  )
}

export default CardEstudos