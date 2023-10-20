import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../assets/img/Logo.png';
import phone from '../../assets/img/telefono.png';
import mail from '../../assets/img/mail_header.png';
import user from '../../assets/img/person.png';
import carrito from '../../assets/img/carrito.png';

export default function Header() {
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
            <a className="nav-item" href="#">Home</a>
            <a className="nav-item" href="./index.html#contacto">Contáctenos</a>
            <a className="nav-item" href="./index.html#nosotros">¿Quienes Somos?</a>                       
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
            <button type="button" className="btn btn-info" onclick="location.href='./login.html'"><img src={user} id="logo_user" alt="user" height="20" onclick="location.href='./login.html'"></img> Inicio Sesión</button>
            <button type="button" className="btn btn-info" onclick="location.href='./logup.html'">Registrarse</button>
            <button type="button" className="btn btn-info" data-bs-toggle="offcanvas" data-bs-target="#carrito"><img src={carrito} id="logo_user" alt="user" height="20"></img></button>
          </div> 
        </div>
      </nav>
    </header>

  )
}
