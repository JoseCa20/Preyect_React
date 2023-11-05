import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/Logo.png';
import phone from '../../assets/img/telefono.png';
import mail from '../../assets/img/mail_header.png';
import user from '../../assets/img/person.png';
import imgCarrito from '../../assets/img/carrito.png';
import {Link} from 'react-router-dom';
import TotalItems from '../Carrito/TotalItems';
import {useContext} from 'react';
import { dataContext } from '../Context/DataContext';

export default function Header() {

  const { carrito } = useContext(dataContext);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-light sticky-top d-flex">
        <div className="container-fluid gap-3 d-flex">         
          <div className="d-inline">
            <a className="nav-link"><img src={phone} alt="phone"></img>(+57) 310 123 4567</a>
            <a className="nav-link"><img src={mail} alt="mail"></img>servicio.cliente@gmail.com</a>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Buscar Producto" aria-label="Buscar"></input>
            <button className="btn btn-outline-success" type="submit">Buscar</button>
          </form> 
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse gap-5 justify-content-end" id="navbarSupportedContent"> 
            <Link to={"/"} className="nav-item">Home</Link>
            <Link className="nav-item">Contáctenos</Link>
            <Link className="nav-item">¿Quienes Somos?</Link>                       
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-expand-lg bg-black sticky-top d-flex">
        <div className="container-fluid">          
          <a className="navbar-brand text-white ms-5" href="#">
            <img src={Logo} alt="Logo" width="80" height="80" className="d-inline-block align-text-center"></img>
            <span id="uno">Cerv</span><span id="dos">eza</span><span>2</span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse justify-content-end gap-3" id="navbarSupportedContent"> 
            <Link to={"/login"} className="btn btn-info"><img src={user} id="logo_user" alt="user" style={{height: "20px"}} ></img> Inicio Sesión</Link>
            <Link to={"/logup"} className="btn btn-info" >Registrarse</Link>
            <Link to={"/cart"} className='d-flex justify-content-evenly align-items-center btn btn-info' style={{width: "70px", height: "40px"}}><img src={imgCarrito} id="logo_user" alt="user"></img>{carrito.length > 0 ? <TotalItems/> : null}</Link>
          </div>           
        </div>
      </nav>
    </header>

  )
}


