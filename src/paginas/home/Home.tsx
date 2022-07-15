import React, { useEffect } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { Box } from "@mui/material";
import './Home.css';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link, useNavigate } from 'react-router-dom';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import { useSelector } from 'react-redux';
import { TokenState } from '../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
/**./ refere a pasta onde se encontra aquele arquivo, estou meio que voltando um caminho */

/**um componente só vai poder retornar um elemento, para ter mais de um elemento é preciso 
 * que estejam dentro de um container
 */

/**todo componente é renderizado como se fosse uma tag similar as tags html */
/**Grid é um componente */
function Home() {

    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Nananinanão, faça o login primeiro!', {
                //error = mensagem de erro
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate('/login')
        }
    }, [token])


    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem vindo(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>expresse aqui os seus pensamentos e opiniões!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to="/posts" className='text-decorator-none'>
                            <Button variant="outlined" className='botao'>Ver Postagens</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <img src="https://i.imgur.com/H88yIo2.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='postagens' >
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
        /**<> </> é um fragment, utilizado para retornar uma lista de elementos, sem precisar definir
         * uma div
        */
    );
}



export default Home;


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

/**ao colocar um style na própria tag, inline, ele tem um poder muito maior, do que colocar o style em um arquivo a parte, entretanto
 * colocando o !importantq conseguimos deixar os arquivos da Home.css tenham uma configuração muito maior do que do material UI*/