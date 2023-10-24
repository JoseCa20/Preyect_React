import React  from 'react'
import check from '../../assets/img/check.png';
import error from '../../assets/img/error.png';


const InputForm = ( {estado, cambiarEstado, type, label, placeholder, name, msgError, regex} ) => {

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
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div className='grupoInput'>
        <input 
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
        <img src={estado.valido === 'true' ? check : error}></img>
      </div>
      <p className='msgError'>{msgError}</p>
    </div>
  )
}

export default InputForm;