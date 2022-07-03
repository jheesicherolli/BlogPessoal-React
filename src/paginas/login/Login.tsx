import React from "react";
import { Grid, Box, Typography, TextField, Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import './Login.css';

function Login()  {
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1' >Entrar</Typography>
                        <TextField id='usuario' label='usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth/>
                        <Box marginTop={2} textAlign='center'>
                            <Link to='/home' className='text-decorator-none'>
                                <Button type='submit' variant='contained' color='primary'>
                                    Logar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
               
            </Grid>
        </Grid>
    );
}

export default Login;

/*********COMENTÁRIOS DO CÓDIGO************/

// <Typography> = tag pra texto
//variant='h3' = define o tipo de título ; variant='contained' = cor de preenchimento
//gutterBottom = margem inferior
//component = reforça a tag h3
//textField = campo de texto
//label = rótulo
//type='password' = oculta a senha, ficando gravada como password
//direction='row', transforma tudo em uma linha
//justifyContent='center', justificar o conteúdo centralizando ele
//marginTop={2}, margem no topo
//textAlign = alinha o texto
//<Link to='/home'>, o link aciona a rota, no exemplo ao logar o usuário será redirecionado para a página home
//submit = envio de informações
//backgroundRepeat = faz com que minha imagem repita ou não dependendo do parâmetro que passo
//backgroundSize: 'cover' , vai cobrir todo o espaço
//backgroundPosition: 'center', posiciona a imagem no centro