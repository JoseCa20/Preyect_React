import {useContext} from 'react';
import { dataContext } from '../Context/DataContext';
import React from 'react'

const CarritoContador = ({ producto }) => {

    const { carrito, setCarrito, comprarProductos } = useContext(dataContext);

    const decrease = () => {
        const verificarProducto = carrito.find((item) => item.id === producto.id);

        if(verificarProducto.cantidad !== 1){
            setCarrito(carrito.map((item) => (item.id === producto.id ? {
                ...producto, cantidad: verificarProducto.cantidad - 1
              } : item)));
        }
    };

    return (
        <>
        <div className='d-flex justify-content-evenly'>
            <button className="bg-white btn-hover disminuir" id="decrease" onClick={decrease}>-</button>
            <h6 className='amount'>{producto.cantidad}</h6>
            <button className="bg-danger btn-hover text-white aumentar" id="increase" onClick={() => comprarProductos(producto)}>+</button>
        </div>
        </>
    )
}

export default CarritoContador