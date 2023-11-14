import React, {useState} from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import imgLogin from '../../assets/img/poker.png';
import InputForm from '../form/InputForm';
import imgAlerta from '../../assets/img/alert_icon-icons.com_52395.png';

const Login = () => {

    const [email, cambiarEmail] = useState({campo: '', validar: null});
    const [password, cambiarPassword] = useState({campo: '', validar: null});
    const [validarFormulario, cambiarValidarFormulario] = useState(null);
    const [navigateTo, setNavigateTo] = useState(null);


    const expresiones = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{8,12}$/, // 8 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        telefono: /^\d{10}$/, // 10 numeros.
        documento: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (          
          email.valido === 'true' &&
          password.valido === 'true')     
        {
          cambiarValidarFormulario(true);
          cambiarEmail({campo: '', valido: null});
          cambiarPassword({campo: '', valido: null});
        }else{
          cambiarValidarFormulario(false);
        }
    }

    async function enviarLogin() {
        const enviar = {
          email: email.campo,
          password: password.campo
        };
    
        const res = await fetch("/login",{
          headers: {
            "Content-type": "Application/json",
          },
          method: "POST",
          body: JSON.stringify(enviar),
        });

        if(res.ok){
            const data = await res.json();

            const token = data.token;

            if(token){
                setNavigateTo('/');
            }
        }
        
    }

    return (
        <>
        <Header/>
        <section className='bg-light-subtle'>
            <div className='container py-5' style={{background: "rgb(206, 200, 200)"}}>
                <div className='row'>
                    <div className='col-md-8 col-lg-7 col-xl-6' >
                        <img src={imgLogin} alt='{imgLogin}' style={{maxWidth: "100%"}}></img>
                    </div>
                    <div className='col-md-4 col-lg-5 col-xl-5 offset-xl-1'>
                        <form className='d-flex flex-column aling-items-center' onSubmit={onSubmit}>
                            <InputForm
                                estado={email}
                                cambiarEstado={cambiarEmail}
                                type="email"
                                label="Correo"
                                placeholder="Example@mail.com"
                                name="Correo"
                                msgError="formato de email inválido"
                                regex={expresiones.email}
                            />

                            <InputForm
                                estado={password}
                                cambiarEstado={cambiarPassword}
                                type="password"
                                label="Contraseña"
                                placeholder="********"
                                name="Contraseña"
                                msgError="Mínimo 8 carácteres"
                                regex={expresiones.password}
                            />
                            <div className='container-terminos'>
                                <label>
                                    <input type='checkbox' name='recordarUsuario' id='recordarUsuario'></input>
                                    Recordarme            
                                </label>
                                </div>
                                {validarFormulario === false && <div className='msgAlerta'>
                                <p><b><img src={imgAlerta} alt='img-{alerta}'></img>Error: </b>Email y/o contraseña incorrectas</p>
                                </div>}
                                <div className='containerBoton'>
                                <button type='submit' onClick={enviarLogin}>Ingresar</button>
                                {validarFormulario === true && <p className='msgExito'>Bienvenido</p>}
                            </div>   
                        </form>
                    </div>
                </div>
                
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Login