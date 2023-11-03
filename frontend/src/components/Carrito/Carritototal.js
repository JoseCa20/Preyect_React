import React from 'react'
import {useContext} from 'react';
import { dataContext } from '../Context/DataContext';

const Carritototal = () => {
    const {carrito} = useContext(dataContext);
    const total = carrito.reduce((acumulador, elemento) => acumulador + elemento.precio * elemento.cantidad, 0);
    return (
        <div className="mt-3 me-5 d-flex justify-content-end">
           <p id="total">Total: ${total}</p>
        </div>
    )
}

export default Carritototal