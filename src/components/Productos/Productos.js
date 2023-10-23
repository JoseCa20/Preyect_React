import React, {useContext} from 'react';
import { dataContext } from '../Context/DataContext';


const Products = () => {

  const { data, comprarProductos} = useContext(dataContext);    

  return (
    <div className='d-grid col-9 col-md-9 ms-5'>
      <div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
        {data.map((product) => {
          return (
            <div className='col' key={product.id}>
              <div className='card'>
                <img className='card-img-top' src={product.img}></img>
                <div className='card-body'>
                  <h5 className='card-title'>{product.nombre}</h5>
                  <p className='card-text'>{product.precio}</p>
                  <button className='btn btn-success btn rounded' onClick={() => comprarProductos(product)} type='button'>Agregar</button>
                </div>
              </div>
          </div>   
          )
        })}
      </div>
    </div>
  )
};

export default Products;

