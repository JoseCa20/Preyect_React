import React, { useState } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import InputForm from '../form/InputForm';
import alerta from '../../assets/img/alert_icon-icons.com_52395.png';


const Logup = () => {

  const [nombres, cambiarNombres] = useState({campo: '', validar: null});
  const [apellidos, cambiarApellidos] = useState({campo: '', validar: null});
  const [documento, cambiarDocumento] = useState({campo: '', validar: null});
  const [celular, cambiarCelular] = useState({campo: '', validar: null});
  const [email, cambiarEmail] = useState({campo: '', validar: null});
  const [password, cambiarPassword] = useState({campo: '', validar: null});
  const [confirmarPassword, cambiarConfirmarPassword] = useState({campo: '', validar: null});
  const [terminos, cambiarTerminos] = useState(false);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,12}$/, // 8 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{10}$/, // 10 numeros.
    documento: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validarPassword = () => {
    if(password.campo.length > 0){
      if(password.campo !== confirmarPassword.campo){
        cambiarConfirmarPassword((estadoAnterior => {
          return {...estadoAnterior, valido: "false"}
        }));
      }else{
        cambiarConfirmarPassword((estadoAnterior => {
          return {...estadoAnterior, valido: "true"}
        }));
      }
    }
  }

  return (
    <>
    <Header/>
    <div className='containerForm'>           
      <form>
          <InputForm 
            estado={nombres}
            cambiarEstado={cambiarNombres}
            type="text"
            label="Nombres"
            placeholder="jose"
            name="Nombres"
            msgError="El nombre no puede contener números, ni carácteres especiales"
            regex={expresiones.nombre}
          />
          <InputForm 
            estado={apellidos}
            cambiarEstado={cambiarApellidos}
            type="text"
            label="Apellidos"
            placeholder="Caceres"
            name="Apellidos"
            msgError="El apellido no puede contener números, ni carácteres especiales"
            regex={expresiones.nombre}
          />
          <InputForm 
            estado={documento}
            cambiarEstado={cambiarDocumento}
            type="text"
            label="N° Documento"
            placeholder="987768899"
            name="N° Documento"
            msgError="Ingrese solo números, sin puntos y comas"
            regex={expresiones.documento}
          />
          <InputForm 
            estado={celular}
            cambiarEstado={cambiarCelular}
            type="text"
            label="Telefono"
            placeholder="3100000000"
            name="Telefono"
            msgError="Ingrese solo números, sin puntos y comas"
            regex={expresiones.telefono}
          />
          <InputForm 
            estado={email}
            cambiarEstado={cambiarEmail}
            type="email"
            label="Email"
            placeholder="jose@mail.com"
            name="Email"
            msgError="Formato de email incorrecto"
            regex={expresiones.correo}
          />
          <InputForm 
            estado={password}
            cambiarEstado={cambiarPassword}
            type="password"
            label="Contraseña"
            placeholder=""
            name="Contraseña"
            msgError="Tamaño de contraseña incorrecto, mínimo 8 carácteres"
            regex={expresiones.password}
          />
          <InputForm 
            estado={confirmarPassword}
            cambiarEstado={cambiarConfirmarPassword}
            type="password"
            label="Confirmar"
            placeholder=""
            name="confirmar"
            msgError="contraseñas no coinciden"
            funcion = {validarPassword}
          />
        <div className='container-terminos'>
          <label>
            <input type='checkbox' name='terminos' id='terminos'></input>
              Acepto los Términos y Condiciones            
          </label>
        </div>
        <div className='msgAlerta'>
          <p><b><img src={alerta} alt='img-{alerta}'></img>Error: </b>Por favor rellena el formulario correctamente</p>
        </div>  
        <div className='containerBoton'>
          <button type='submit'>Enviar</button>
          <p className='msgExito'>Formulario enviado exitosamente</p>
        </div>                   
      </form>
    </div>
    <Footer/>
    </>
  )
}

export default Logup