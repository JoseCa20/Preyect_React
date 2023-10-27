import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataProvider from './components/Context/DataContext';
import Home from './components/views/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarritoContent from './components/Carrito/CarritoContent';
import Logup from './components/views/Logup';
import Login from './components/views/Login';
import Admin from './components/views/Admin';
import Index from './components/views/Index';


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<CarritoContent/>}/>
          <Route path='/logup' element={<Logup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/index' element={<Index/>}/>
          <Route path='/pay'/>

        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
