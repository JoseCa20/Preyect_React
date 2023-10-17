import React from 'react'

const Producto = (props) => {
  return (
    <div className='col-lg-4'>
      <div className='text-center card-box'>
        <div className='member-card pt-2 pb-2'>
          <div className='card'>
            <img className='card-img-top' src={props.img}></img>
            <div className='card-body'>
              <h5 className='card-title'>{props.nombre}</h5>
              <p className='card-text'>{props.precio}</p>
              <button className='btn btn-success btn rounded' type='button'>Agregar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Producto;