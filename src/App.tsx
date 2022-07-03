import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';


/**aqui eu posso adicionar códigos html dentro de javascript, graças ao JSX dentro do typescript(TSX) */

function App() {
  return (
     <Router>
        <Navbar/>
              <div style={{minHeight: '100vh'}}>
                  <Routes> //antigo switch 
                     <Route path='/' element={<Login/>} />
                     <Route path='/login' element={<Login/>}/>
                     <Route path='/home' element={<Home/>} />
                  </Routes>
              </div>
           <Footer/>
     </Router>
  );
}

export default App;

/**
 *  <Switch> = componentes a serem alterados ficam dentro dele
 *  <Route/> = responsável por fazer a troca de cada componente, já que possuirá seu caminho/rota (representado pelo path)
 */
