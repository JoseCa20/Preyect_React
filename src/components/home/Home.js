import React from 'react';
import Header from '../header/Header';
import Iconos from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Products from '../Productos/Productos';

const Home = () => {
  return (    
    <body style={{backgroundColor: "#482496"}}>  
      <Header/>
      <div className='container-xxl mt-3 my-md-4 ms-1 row'>           
        <Iconos/>
        <Products/>
      </div>
      <Footer/>
    </body>
  )
}

export default Home