import React, {useState} from 'react'
import Icon from './Icon';
import home from '../assets/img/home.png';
import pedidos from '../assets/img/pedidos.png';
import cervezas from '../assets/img/cervezas.png';
import licores from '../assets/img/licores.png';
import cuenta from '../assets/img/user.png';
import cigarrillos from '../assets/img/cigarrillos.png';
import gaseosas from '../assets/img/gaseosas.png';
import cerrarSesion from '../assets/img/salir.png';

const Iconos = () => {
  const [icons, setIcons] = useState([
      {nombre: "Home",
      img: home
      },
  
      {nombre: "Cuenta",
      img: cuenta
      },

      {nombre: "Pedidos",
      img: pedidos
      },

      {nombre: "Cervezas",
      img: cervezas
      },

      {nombre: "Licores",
      img: licores
      },

      {nombre: "Cigarrillos",
      img: cigarrillos
      },

      {nombre: "Gaseosas",
      img: gaseosas
      },

      {nombre: "Cerrar Sesion",
      img: cerrarSesion
      },
  ]);

  return (
    <div className='container-xxl mt-3 my-md-4 ms-1 row'>
      <div className='d-flex flex-column flex-shrink-0 p-3 bg-light col-3' style={{width: "250px"}}>
        <a className='d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none'>
        </a>
        <ul className='nav nav-pills flex-column mb-auto'>
          {icons.map((icon) => {
            return (          
              <Icon img={icon.img} nombre={icon.nombre}/>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Iconos;
