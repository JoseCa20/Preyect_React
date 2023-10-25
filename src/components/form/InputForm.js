import React  from 'react'
import check from '../../assets/img/check.png';
import error from '../../assets/img/error.png';



const InputForm = ( {estado, cambiarEstado, type, label, placeholder, name, msgError, regex, funcion} ) => {

  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value});
  }

  const validacion = () => {
    if(regex){
      if(regex.test(estado.campo)){
        cambiarEstado({...estado, valido: 'true'});
      }else{
        cambiarEstado({...estado, valido: 'false'});
      }
    }
    if(funcion){
      funcion();
    }
  }

  return (
    <> 
    <div className=''>
      <label htmlFor={name}>{label}</label>
        <div className='grupoInput'>
          <input className='inputFormulario'
          type={type} 
          placeholder={placeholder} 
          id={name} 
          value={estado.campo} 
          onChange={onChange}
          onKeyUp={validacion}
          onBlur={validacion}
          valido={estado.valido}
          >        
          </input>
          <img className='icono' valido={estado.valido} src={estado.valido === 'true' ? check : error}></img>
        </div>
      <p className='msgError' valido={estado.valido}>{msgError}</p>          
    </div>    
  </>
  )
}

export default InputForm;