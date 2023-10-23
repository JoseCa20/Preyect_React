import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Products from '../Productos/Productos';
import Navbar from '../navbar/Navbar';

const Home = () => {
  return (    
    <body style={{backgroundColor: "#482496"}}>  
      <Header/>
      <div className='container-xxl mt-3 my-md-4 ms-1 row'>           
        <Navbar/>
        <Products/>
      </div>
      <Footer/>
    </body>
  )
}

export default Home