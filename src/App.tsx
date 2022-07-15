import React from 'react';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import './App.css';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';


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
                     <Route path='/cadastrousuario' element={<CadastroUsuario/>} />
                     <Route path='/temas' element={<ListaTema/>} />
                     <Route path='/posts' element={<ListaPostagem/>} />    
                     <Route path='/formularioPostagem' element={<CadastroPost/>} />                  
                     <Route path='/formularioPostagem/:id' element={<CadastroPost/>} />
                     <Route path='/formularioTema' element={<CadastroTema/>} />  
                     <Route path='/formularioTema/:id' element={<CadastroTema/>} />                  
                     <Route path='/deletarPostagem/:id' element={<DeletarPostagem/>} />  
                     <Route path='deletarTema/:id' element={<DeletarTema/>} />                  
                   
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
