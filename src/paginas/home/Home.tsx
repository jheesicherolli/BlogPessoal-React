import React from 'react';
import {Button, Box, Paper, Grid, Typography} from '@material-ui/core';
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
           <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#3F51B5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "white", fontWeight: "bold" }}>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "white", fontWeight: "bold" }}>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button variant="outlined" style={{ borderColor: "white", backgroundColor: "#3F51B5", color: "white" }}>Ver Postagens</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
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
