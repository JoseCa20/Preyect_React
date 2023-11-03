import React, {useState} from 'react'
import Icon from './Icon';
import home from '../../assets/img/home.png';
import pedidos from '../../assets/img/pedidos.png';
import cervezas from '../../assets/img/cervezas.png';
import licores from '../../assets/img/licores.png';
import cuenta from '../../assets/img/user.png';
import cigarrillos from '../../assets/img/cigarrillos.png';
import gaseosas from '../../assets/img/gaseosas.png';
import cerrarSesion from '../../assets/img/salir.png';

const Navbar = () => {
  const [icons, setIcons] = useState([
      {
        id: 1,
        nombre: "Home",
        img: home
      },
  
      {
        id: 2,
        nombre: "Cuenta",
        img: cuenta
      },

      {
        id: 3,
        nombre: "Pedidos",
        img: pedidos
      },

      {
        id: 4,
        nombre: "Cervezas",
        img: cervezas
      },

      {
        id: 5,
        nombre: "Licores",
        img: licores
      },

      {
        id: 6,
        nombre: "Cigarrillos",
        img: cigarrillos
      },

      {
        id: 7,
        nombre: "Gaseosas",
        img: gaseosas
      },

      {
        id: 8,
        nombre: "Cerrar Sesion",
        img: cerrarSesion
      },
  ]);

  return (    
    <div className='d-flex flex-column p-3 bg-light' style={{width: "250px"}}>
      <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
      </a>
      <hr></hr>
      <ul className='nav nav-pills flex-column mb-auto'>
        {icons.map((icon) => {
          return (          
            <Icon img={icon.img} nombre={icon.nombre}/>
          )
        })}
      </ul>
    </div>
  )
}

export default Navbar;
