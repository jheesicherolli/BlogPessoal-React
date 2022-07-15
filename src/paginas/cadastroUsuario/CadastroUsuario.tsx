import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, TextField } from '@material-ui/core';
import { Box, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import User from '../../models/User';
import { cadastroUsuario } from '../../services/Service';
import { toast } from 'react-toastify';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    //confirmar se as senhas batem, no senha e confirmar senha e se forem iguais é enviada as informações pro cadastro
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''
        })
    //informações enviadas pra cadastro

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nome: '',
            usuario: '',
            senha: '',
            foto: ''

        })
    //armazenar os valores do retorno da api, os valores cadastrados são guardados dentro de userResult

    useEffect(() => {
        if (userResult.id !== 0)
        //verifica se p valor é diferente de , se for significa que já tem algum valor cadastrado
        {
            navigate("/login")
            //assim que o usuário tiver cadastrado será direcionado para a página de login
            /* console.log(userResult), mas não é uma boa prática por deixar as informações a mostra
            retornar todos os dados que a api cadastrou em formato JSON*/
        }
    }, [userResult])
    //usado após o envio das informações


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
        //capturar o valor digitado no confirmarSenha
    }
    //trabalha em conjunto com o useState do inicio confirmarSenha

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha == user.senha) {
            cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            /*acessa a service de cadastro enviando a rota, enviando os valores do objeto user (useState user) que são inseridos pelo usuário nos campos e atualizados pela updatedModel
            ao enviar os dados ele aguarda o retorno na setUserResult*/

            toast.success('Você conseguiu, foi cadastrado!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            toast.error('Fez algo errado. Tente de novo!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
    }
    //envia os dados pra cadastro


    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='imagem2'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2' >Cadastrar</Typography>
                        <TextField value={user.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='Usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />
                        {/* confirmarSenhaHandle = responsável por verificar se a senha e o confirmarSenha digitados pelo usuário são os mesmos valores pra confirmar se os valores são exatamentes iguais e enviar os dados para api*/}
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary' className='btnConfiguracao'>
                                Cadastrar
                            </Button>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' color='secondary'>
                                    Cancelar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>
            </Grid>

        </Grid>
    );
}

export default CadastroUsuario;