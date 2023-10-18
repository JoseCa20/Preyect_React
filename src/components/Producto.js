import React from 'react'

const Producto = (props) => {
  return (
    
      <div className='col'>
        <div className='card'>
          <img className='card-img-top' src={props.img}></img>
          <div className='card-body'>
            <h5 className='card-title'>{props.nombre}</h5>
            <p className='card-text'>{props.precio}</p>
            <button className='btn btn-success btn rounded' type='button'>Agregar</button>
          </div>
        </div>
      </div>   
  )
}

export default Producto;