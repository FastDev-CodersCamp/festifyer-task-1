import React from 'react'
import './css/Card.css'

function Card({icon,title,desc,color}) {
  return (
    <div className='card-comp'>
        {icon &&
            <i className={icon} style={{color:color}}></i>
        }
        <h2 >{title}</h2>
        <p>{desc}</p>
    </div>
  )
}

export default Card
