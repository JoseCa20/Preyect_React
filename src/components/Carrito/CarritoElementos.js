import React, {useContext} from 'react';
import { dataContext } from '../Context/DataContext';
import imgEliminar from '../../assets/img/eliminar.png';
import CarritoContador from './CarritoContador';

const CarritoElementos = () => {
    const {carrito, setCarrito} = useContext(dataContext);   
    
    const borrarProducto = (id) => {
        const encontrarId = carrito.find((item) => item.id === id);

        const nuevoCarrito = carrito.filter((item) => {
            return item !== encontrarId;
        });

        setCarrito(nuevoCarrito);
    }
        return carrito.map((product) => {
            return(
                <>
                   <tr key={product.id}>
                        <td >
                            <div className="d-flex justify-content-center">
                                <img
                                    src={product.img}
                                    alt=""
                                    style= {{width: "45px", height: "45px"}}
                                    className="rounded-circle" />
                            </div>
                        </td>
                        <td>
                            <div className="d-inline">
                                <h6 className="h6">{product.nombre}</h6>
                                <p className="card-text" id="priceUnit">${product.precio}</p>
                            </div>
                        </td>                        
                        <td>
                            <CarritoContador producto={product} />
                        </td>
                        <td>
                            <div className="imagen">
                                <img style={{cursor: "pointer"}} src={imgEliminar} alt="eliminarProducto" onClick={() => borrarProducto(product.id)}></img>
                            </div>
                        </td>
                    </tr> 
                </>
            )
        }

        )    
}

export default CarritoElementos
