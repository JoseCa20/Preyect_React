import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Products from './components/Productos';
import Iconos from './components/Navbar';

function App() {
  return (
    <body>      
      <Header/>
      <Iconos/>
      <Products/>
    </body>
  );
}

export default App;
