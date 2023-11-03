import React from 'react'
import facebook from '../../assets/img/facebook.png';
import twiter from '../../assets/img/twiter.png';
import instagram from '../../assets/img/instagram.png';
import location from '../../assets/img/location.png';
import phone from '../../assets/img/llamada.png';
import mail from '../../assets/img/mail.png';

export default function Footer() {
  return (
    <footer className="bg-light text-center text-md-start mt-3">
      <div className="container p-4">
        <div className="row">
          <div className="col-lg-5 col-md-12 mb-2 mb-md-0">
            <h5 className="text-uppercase text-center">¿Que hacemos?</h5>  
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis
              molestias. Fugiat pariatur maxime quis culpa corporis vitae repudiandae
              aliquam voluptatem veniam, est atque cumque eum delectus sint!
            </p>
          </div>

          <div className="col-lg-3 col-md-6 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase text-center">Redes Sociales</h5>
            <a className="btn  btn-floating m-1" href="#!" role="button">
              <img src={facebook} alt=""></img>Siguenos en Facebook</a>
            <a className="btn btn-floating m-1" href="#!" role="button">
              <img src={twiter} alt=""></img>Siguenos en Twiter</a>
            <a className="btn btn-floating m-1" href="#!" role="button">
              <img src={instagram} alt=""></img>Siguenos en Instagram</a>
          </div>
          
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-center">
            <h5 className="text-uppercase mb-0">Contáctanos</h5>
            <a className="btn  btn-floating m-1" href="#!" role="button">
            <img src={location} alt=""></img>Calle 17 # 11-54, Sogamoso/Boyacá</a>
            <a className="btn btn-floating m-1" href="#!" role="button">
              <img src={phone} alt=""></img>(+57)310 123 4567</a>
            <a className="btn btn-floating m-1" href="#!" role="button">
              <img src={mail} alt=""></img>servicio.cliente@gmail.com</a>
          </div>
        </div>
      </div>
      <div className="text-center p-3" style={{backgroundColor: "#000000"}}>
        © 2020 Copyright
      </div>
    </footer>
  )
}
