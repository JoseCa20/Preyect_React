import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        axios("data.json").then((response) => setData(response.data));
    }, []);

    const comprarProductos = (product) =>{
        const verificarProducto = carrito.find((item) => item.id === product.id);
        if(verificarProducto){
          setCarrito(carrito.map((item) => (item.id === product.id ? {
            ...product, cantidad: verificarProducto.cantidad + 1
          } : item)));
        }else{
          setCarrito([...carrito, product]);
        }      
    }

    return (
        <dataContext.Provider value={{ data, carrito, setCarrito, comprarProductos }}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider