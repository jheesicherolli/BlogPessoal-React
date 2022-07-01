import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import {Grid} from '@material-ui/core';
import Home from './paginas/home/Home';
import './App.css';


/**aqui eu posso adicionar códigos html dentro de javascript, graças ao JSX dentro do typescript(TSX) */

function App() {
  return (
     <>
       <Navbar/>
        <Home/>
       <Footer/>
     </>
  );
}

export default App;
