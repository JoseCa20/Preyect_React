import React, { useState } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import InputForm from '../form/InputForm'

const Logup = () => {

  const [nombres, cambiarNombres] = useState({campo: '', validar: null});
  const [apellidos, cambiarApellidos] = useState({campo: '', validar: null});
  const [documento, cambiarDocumento] = useState({campo: '', validar: null});
  const [celular, cambiarCelular] = useState({campo: '', validar: null});
  const [email, cambiarEmail] = useState({campo: '', validar: null});
  const [password, cambiarPassword] = useState({campo: '', validar: null});
  const [confirmarPassword, cambiarConfirmarPassword] = useState({campo: '', validar: null});

  const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  return (
    <>
    <Header/>
    <div className='container-xxl mt-3 my-md-4 ms-1 row'>           
        <form>
          <InputForm 
            estado={nombres}
            cambiarEstado={cambiarNombres}
            type="text"
            label="Nombre"
            placeholder="jose"
            name="Nombre"
            msgError=""
            regex={expresiones.nombre}
          />
          <InputForm 
            estado={apellidos}
            cambiarEstado={cambiarApellidos}
            type="text"
            label="Apellidos"
            placeholder="Caceres"
            name="Apellidos"
            msgError=""
            regex={expresiones.nombre}
          />
        </form>
    </div>
    <Footer/>
    </>
  )
}

export default Logup