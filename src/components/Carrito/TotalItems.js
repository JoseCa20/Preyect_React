import React from 'react'
import {useContext} from 'react';
import { dataContext } from '../Context/DataContext';

const TotalItems = () => {

    const { carrito } = useContext(dataContext);

    const cantidadItemsCarrito = carrito.reduce((acumulador, elemento) => acumulador + elemento.cantidad, 0);

    return (
        <p className='bg-danger rounded'>{cantidadItemsCarrito}</p>
    )
}

export default TotalItems