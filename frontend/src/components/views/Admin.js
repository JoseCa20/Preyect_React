import React, { useState } from 'react';
import InputForm from '../form/InputForm';
import imgAlerta from '../../assets/img/alert_icon-icons.com_52395.png';


const Admin = () => {

  const [imagen, cambiarImagen] = useState({campo: '', validar: null});
  const [descripcion, cambiarDescripcion] = useState({campo: '', validar: null});
  const [precio, cambiarPrecio] = useState({campo: '', validar: null});
  const [validarFormulario, cambiarValidarFormulario] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{8,12}$/, // 8 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{1,10}$/, // 10 numeros.
    documento: /^\d{7,14}$/ // 7 a 14 numeros.
}

const onSubmit = (e) => {
  e.preventDefault();
  
  if (          
    imagen.valido === 'true' &&
    descripcion.valido === 'true' &&
    precio.valido === 'true')     
  {
    cambiarValidarFormulario(true);
    cambiarImagen({campo: '', valido: null});
    cambiarDescripcion({campo: '', valido: null});
    cambiarPrecio({campo: '', valido: null});
  }else{
    cambiarValidarFormulario(false);
  }
}

function enviarProducto() {
  const enviar = {
    imagen: imagen.campo,
    descripcion: descripcion.campo,
    precio: precio.campo
  };

  fetch("/admin/productos",{
    headers: {
      "Content-type": "Application/json",
    },
    method: "POST",
    body: JSON.stringify(enviar),
  });
}

  return (
    <section className='bg-light-subtle'>
      <div className='container py-5' style={{background: "rgb(206, 200, 200)"}}>
          <div className='row'>              
              <div className='col-md-4 col-lg-5 col-xl-5 offset-xl-1 d-grid justify-content-center'>
                <div>
                  <h1>Crear Producto</h1>
                </div>
                  <form className='d-flex flex-column aling-items-center' onSubmit={onSubmit}>
                      <InputForm
                          estado={imagen}
                          cambiarEstado={cambiarImagen}
                          type="file"
                          label="Imagen"
                          name="Imagen"
                      />

                      <InputForm
                          estado={descripcion}
                          cambiarEstado={cambiarDescripcion}
                          type="text"
                          label="Descripcion"
                          placeholder="Example: coronita six-pack 210 mL"
                          name="Descripcion"
                      /> 

                      <InputForm
                          estado={precio}
                          cambiarEstado={cambiarPrecio}
                          type="text"
                          label="Precio"
                          placeholder="Ingresar sin puntos ni comas"
                          name="Precio"
                          msgError="Ingrese solo números"
                          regex={expresiones.telefono}
                      />    
                      {validarFormulario === false && <div className='msgAlerta'>
                      <p><b><img src={imgAlerta} alt='img-{alerta}'></img>Error: </b>Todos los campos deben ser llenados</p>
                      </div>}
                      <div className='containerBoton'>
                      <button type='submit' onClick={enviarProducto}>Crear</button>
                      {validarFormulario === true && <p className='msgExito'>Producto enviado con éxito!</p>}
                      </div>                    
                  </form>
              </div>
          </div>          
      </div>
    </section>
  )
}

export default Admin