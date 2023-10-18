import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Products from './components/Productos';
import Iconos from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <body style={{backgroundColor: "#482496"}}>  
      <Header/>
      <div className='container-xxl mt-3 my-md-4 ms-1 row'>           
        <Iconos/>
        <Products/>
      </div>
      <Footer/>
    </body>
  );
}

export default App;
