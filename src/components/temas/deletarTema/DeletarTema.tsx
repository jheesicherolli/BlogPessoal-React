import React, { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import useLocalStorage from "react-use-localstorage";
import Tema from "../../../models/Tema";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";


function DeletarTema() {

    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [token, setToken] = useLocalStorage('token');

    const [tema, setTema] = useState<Tema>()

    useEffect(() => {
        if (token == "") {
            alert("Faça o login primeiro")
            navigate("/login")
        }
    }, [token])
   

    useEffect(() => {
        if (id !== undefined) {
            findById(id)
        }
    }, [id])


    async function findById(id: string) {
        buscaId(`/tema/${id}`, setTema, {
            //rota do swagger
            headers: {
                'Authorization': token
            }
        })
    }

    function sim() {
        navigate('/temas')
        deleteId(`/tema/${id}`, {
            //rota do swagger
            headers: {
                'Authorization': token
            }
        });
        alert('Que chato você deletou meu tema favorito .-.')
    }

    function nao(){
        navigate('/temas')
    }

    return(
        <>
      <Box m={2}>
        <Card variant="outlined">
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar o Tema:
              </Typography>
              <Typography color="textSecondary">
               {tema?.descricao}
              </Typography>
            </Box>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="start" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft" size='large' color="primary">
                  Sim
                </Button>
              </Box>
              <Box mx={2}>
                <Button onClick={nao} variant="contained" size='large' color="secondary">
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
    );
}

export default DeletarTema;