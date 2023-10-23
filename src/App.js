import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataProvider from './components/Context/DataContext';
import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarritoContent from './components/Carrito/CarritoContent';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CarritoContent/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
