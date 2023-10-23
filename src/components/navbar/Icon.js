import React from 'react'

const Icon = (props) => {
  return (
      
        <li className='nav-item' key={props.id}>
            <a className='nav-link link-dark'>
                <img src={props.img}></img>{props.nombre}
            </a>
        </li>
  )
}

export default Icon;