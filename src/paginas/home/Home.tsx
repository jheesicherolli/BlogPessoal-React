import React from 'react';
import {Button, Box, Paper} from '@material-ui/core';
import './Home.css';
/**./ refere a pasta onde se encontra aquele arquivo, estou meio que voltando um caminho */

/**um componente só vai poder retornar um elemento, para ter mais de um elemento é preciso 
 * que estejam dentro de um container
 */

/**todo componente é renderizado como se fosse uma tag similar as tags html */
/**Grid é um componente */
function Home(){
    return (
        <>
        <h1 className="titulo">Home</h1>
        <img className='img' src="https://content.r9cdn.net/rimg/dimg/22/f0/2fa0f608-city-20169-1697d979499.jpg?crop=true&width=1366&height=768&xhint=2057&yhint=1367" alt="Imagem da tela inicial" width="600px" height="500px" />
        <h3 className="titulo">Cidade de Curitiba</h3>
        </>
        /**<> </> é um fragment, utilizado para retornar uma lista de elementos, sem precisar definir
         * uma div
        */
    );
}


  /**paper, da a ideia de que no background, existem folhas papel
  <Paper/> fica dentro de todos os Grids Item
  */
  /*
  <Grid item xs={12} sm={8} > vai se adequar de acordo com a tela, no xs vai ocupar 12 colunas, ex: caso apareça em um celular ele vai ocupar todo espaço da tela, as 12 colunas, 
  ocupando tudo ele não irá ficar um do lado da outra e sim em colunas, enquanto no sm vai ocupar 8 colunas
  
  direction="column"diz como ela deve se comportar, ou seja, como coluna
   */
  
  /*p=padding, que por sua vez é o espaçamento interno dos elementos
  variant= faz com que o preenchimento da cor seja no botão inteiro
  */

export default Home;
