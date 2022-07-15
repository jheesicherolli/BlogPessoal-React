import React, { useState, useEffect, ChangeEvent } from 'react';
import { Container, Typography, TextField } from "@material-ui/core";
import { Button } from '@mui/material';
import Tema from '../../../models/Tema';
import { buscaId, post, put } from '../../../services/Service';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';

function CadastroTema() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    //poderá cadastrar ou alterar um tema a partir do id com a ajuda do useParams
    const token= useSelector<TokenState,TokenState["tokens"]>(
        (state) => state.tokens
        );

    const [tema, setTema] = useState<Tema>({
        id: 0,
        descricao: ''
    })

        // useEffect para monitorar o token
    useEffect(() => {
        if (token == "") {
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
    //resposável pelo ciclo de vida e verificação da existência de um token

    // useEffect para monitorar o id
    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            headers: {
                'Authorization': token
            }
        })
    }

    function updatedTema(e: ChangeEvent<HTMLInputElement>) {

        setTema({
            ...tema,
            [e.target.name]: e.target.value,
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        e.preventDefault()
        console.log("tema " + JSON.stringify(tema))

        if(id !== undefined){
            console.log(tema)
             //Rota da API
            put(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Aeeeee atualizou um tema', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }else {
            post(`/tema`, tema, setTema, {
                headers: {
                    'Authorization': token
                }
            })
            toast.success('Conseguiu cadastrar um temaaaaa!!', {
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
        back()
    }

    function back(){
        navigate("/temas")
    }


    return (
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" >Formulário de Cadastro Tema</Typography>
                <TextField value={tema.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTema(e)} id="descricao" label="Descrição" variant="outlined" name="descricao" margin="normal" fullWidth />
                <Button type="submit" variant="contained" color="primary">
                    Finalizar
                </Button>
            </form>
        </Container>
    )
}

export default CadastroTema;

//useParams = capturar parâmetros de uma URL