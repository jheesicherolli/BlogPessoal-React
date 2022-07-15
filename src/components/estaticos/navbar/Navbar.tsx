import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import {toast} from "react-toastify";
import './Navbar.css';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();
    //dispara a ação para armazenamento dentro do store
    let navigate = useNavigate();

    function goLogout() {
        dispatch(addToken(''));
        //token é eliminado
        toast.info('Tchauu, até mais', {
            position: "top-right",
            autoClose: 2000,
            //tempo de tela
            hideProgressBar: false,
            //false exibe a barra de progresso
            closeOnClick: true,
            //true: possibilidade de fechar a notificação clicando no x
            pauseOnHover: false,
            //false não permite que a notificação continue em tela, ou seja pause
            draggable: false,
            //move a noticação de local, mas por estar false não realizará nada
            theme: "colored",
            //tipo de tema da notificação
            progress: undefined,
        });
        //alerta informativo
        navigate("/login")
        //direcionado pra tela de login, assim ele é obrigado a se autenticacar novamente
    }
    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
                <Box className='cursor' >
                    <Typography variant="h5" color="inherit">
                        BlogPessoal
                    </Typography>
                </Box>

                <Box display="flex" justifyContent="start">
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Temas
                            </Typography>
                        </Box>
                    </Link>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                Cadastrar tema
                            </Typography>
                        </Box>
                    </Link>

                    <Box mx={1} className='cursor' onClick={goLogout}>
                        <Typography variant="h6" color="inherit">
                            Logout
                        </Typography>
                    </Box>


                </Box>

            </Toolbar>
        </AppBar>
    }


    return (
        <>
            {navbarComponent}
            {/* a partir daqui a navBar só aparece se houver um token */}
        </>
    );
}

export default Navbar;

/**
 *  <Toolbar> = barra de ferramentas
 *  <Typography> = recurso de fonte
 *  cursor: "pointer" = transforma o mouse em uma mãozinha

 */