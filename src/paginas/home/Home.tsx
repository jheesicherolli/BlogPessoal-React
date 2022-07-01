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
         <Paper>
            <Box p={2}>
                <Box display="flex" justifyContent="center">
                    <h1>Título</h1>
                </Box>
                <img src="https://www.pinkvilla.com/imageresize/avengers-endgame-poster_1.jpg?width=752&format=webp&t=pvorg" alt="" style={{width: "100%", height:"100%"}}/>
                <Box display="flex" justifyContent="center" p={2}>
                    <Button variant="contained" color="primary">Texto 1</Button>
                    <Button variant="contained" color="secondary">Texto 2</Button>
                </Box>
            </Box>
         </Paper>
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
