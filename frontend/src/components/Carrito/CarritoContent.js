import CarritoElementos from './CarritoElementos';
import {useContext} from 'react';
import { dataContext } from '../Context/DataContext';
import React from 'react'
import Carritototal from './Carritototal';
import imgCarrito from '../../assets/img/carritoVacio.png'
import Header from '../header/Header';
import { Link } from 'react-router-dom';

const CarritoContent = () => {
  const {carrito} = useContext(dataContext);

  function pagar() {
    const venta = {
      productos: carrito,
      total: carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0)
    };

    fetch("/pay",{
      headers: {
        "Content-type": "Application/json",
      },
      method: "POST",
      body: JSON.stringify(venta),
    });
  }

  return (
    <>
      <Header/>
      { carrito.length > 0 ? (
      <>
      <div>
        <h2 className='p-3 mb-2 bg-success text-white text-center'>Carrito de compras</h2>
      </div>
      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light text-center">
        <tr>
          <th></th>
          <th>Producto</th>
          <th>Cantidad</th>
          <th></th>
        </tr>
        </thead>
        <tbody className="text-center" id="tbodyCarrito">
            <CarritoElementos/>
        </tbody>
      </table>  
      <Carritototal/> 
      <div className="mt-5 d-flex justify-content-center">
        <button className="btn btn-success" onClick={pagar} > COMPRAR </button>
      </div> 
      <div className="mt-5 d-flex justify-content-center">
          <Link to={"/"} className="btn btn-danger" >VOLVER A LA TIENDA</Link>
      </div> 
    </>   
    ) : (
      <>
      <div>
        <h2 className='p-3 mb-2 bg-success text-white text-center'>Carrito de compras</h2>
      </div>
      <div className='d-grid justify-content-center mt-5' >
        <img src={imgCarrito} alt='' className='mx-5'></img>
        <p className='text-center'>Tu Carrito esta vacío</p>
        <Link to={"/"} className="btn btn-danger" >VOLVER A LA TIENDA</Link>
      </div> 
    </>   
    )}
  </>
  )
}

export default CarritoContent





// const CarritoContent = () => {
//   return (
//     <div className="offcanvas offcanvas-end px-0 w-50" id="carrito">
//       <div className="offcanvas-header bg-success text-white">
//         <div className="offcanvas-title">
//             <h6>TU LISTA DE COMPRAS</h6>
//         </div>  
//         </div>
//         <div className="offcanvas-body">
//           <table className="table align-middle mb-0 bg-white">
//             <thead className="bg-light text-center">
//             <tr>
//               <th></th>
//               <th>Producto</th>
//               <th>Cantidad</th>
//               <th></th>
//             </tr>
//             </thead>
//             <tbody className="text-center" id="tbodyCarrito">
//               <tr className='itemCarrito'>                        
//                 <CarritoElementos/>
//               </tr>              
//             </tbody>
//           </table> 
//         <div className="mt-3 d-flex justify-content-end">
//           <p id="total">Total</p>
//         </div>
//         <div className="mt-5 d-flex justify-content-center">
//             <button className="btn btn-success" data-bs-dismiss="offcanvas"> COMPRAR </button>
//         </div> 
//         <div className="mt-5 d-flex justify-content-center">
//             <button className="btn btn-danger" data-bs-dismiss="offcanvas">VOLVER A LA TIENDA</button>
//         </div> 
//       </div>            
//     </div>      
//   )
// }

//export default CarritoContentc