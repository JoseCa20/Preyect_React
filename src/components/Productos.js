import React, {useState} from 'react';
import Producto from './Producto';
import coronita from '../assets/img/coronita.png';
import budweiser from '../assets/img/budweiser.png';
import stella from '../assets/img/stellaArtois.png';
import heineken from '../assets/img/heineken.png';

const Products = () => {
    const [products, setProducts] = useState([
        {id: 1,
        nombre: "Coronita 210 mL x6 un",
        precio: 15490,
        img: coronita
        },
    
        {id: 2,
        nombre: "Budweiser 250 mL x6 un",
        precio: 12990,
        img: budweiser
        },
    
        {id: 3,
        nombre: "Stella Artois 355 mL x6 un",
        precio: 27990,
        img: stella
        },
    
        {id: 4, 
        nombre: "Heineken 250 mL x6 un",
        precio: 14490,
        img: heineken
        }
    ]);
  return (
    <div className='d-grid col-9 col-md-9 ms-5'>
      <div className='row row-cols-1 row-cols-md-3 g-4 text-center'>
        {products.map((product) => {
          return (
              <Producto nombre={product.nombre} img={product.img} precio={product.precio}/>
          )
        })}
      </div>
    </div>
  )
};

export default Products;

