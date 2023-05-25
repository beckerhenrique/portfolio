import React, { useState } from 'react'

import "./CardHabilidades.css"

function CardHabilidades({icon, nome, classname="", clickContact, value}) {
  const [isHovered, setIsHovered] = useState(false)

  const cardHovered = () => {
    setIsHovered(true)
  }

  const cardNotHovered = () => {
    setIsHovered(false)
  }

  return (
    <div className='cardHabilidades' onMouseEnter={cardHovered} onMouseLeave={cardNotHovered} onClick={() => clickContact(value)}>
      <h3 style={{color: isHovered ? '#d946ef' : ''}}>{icon}</h3>
      <h2 className={classname} style={{color: isHovered ? '#d946ef' : ''}}>{nome}</h2>
    </div>
  )
}

export default CardHabilidades