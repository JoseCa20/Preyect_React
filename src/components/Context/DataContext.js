import axios from 'axios';
import React, { createContext, useState, useEffect } from 'react';

export const dataContext = createContext();

const DataProvider = ({children}) => {
    const [data, setData] = useState([]);
    const [carrito, setCarrito] = useState([]);

    useEffect(() => {
        axios("data.json").then((response) => setData(response.data));
    }, [])
    return (
        <dataContext.Provider value={{data}}>
            {children}
        </dataContext.Provider>
    )
}

export default DataProvider