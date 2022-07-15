import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Typography } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import Tema from '../../../models/Tema';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';


function ListaTema() {

    const [temas, setTemas] = useState<Tema[]>([]);
    const token= useSelector<TokenState,TokenState["tokens"]>(
        (state) => state.tokens
        );
    //é inicializado com o valor token
    let navigate = useNavigate();
    //redirecionamento de páginas, se não tiver autenticado é mandado pra página de login

    useEffect(() => {
        if (token == '') {
            toast.error('Faça o login primeiro', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            navigate("/login")
        }
    }, [token])

    async function getTema() {
        await busca("/tema", setTemas, {
            headers: {
                'Authorization': token
                //propriedade que recebe o token
            }
        })
    }
    //headers cabeçalho da requisição

    useEffect(() => {
        getTema()
    }, [temas.length])
    //length = tamanho, sempre que temas mudar, ele vai aconar a função getTema



    return (
        <>
            {
                temas.map(tema =>(
                <Box m={2}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography variant="h5" component="h2">
                               {tema.descricao}
                               {/* pega o tema que está na variável map e captura a descrição */}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Box display='flex' justifyContent='center' mb={1.5} >
                                <Link to={`/formularioTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" className="marginLeft" size="small" color="primary">
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link to={`/deletarTema/${tema.id}`} className="text-decorator-none">
                                    <Box mx={1}>
                                        <Button variant="contained" size="small" color="secondary">
                                            Deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))
            }
        </>
    )
}

export default ListaTema;