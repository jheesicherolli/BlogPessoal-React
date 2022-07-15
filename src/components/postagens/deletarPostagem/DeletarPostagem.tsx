import { useEffect, useState } from "react";
import { Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box, Button } from "@mui/material";
import useLocalStorage from "react-use-localstorage";
import { useNavigate, useParams } from "react-router-dom";
import { buscaId, deleteId } from "../../../services/Service";
import Postagem from "../../../models/Postagem";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";



function DeletarPostagem() {

  let navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const [post, setPosts] = useState<Postagem>()

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
    buscaId(`/postagens/${id}`, setPosts, {
      //rota do swagger
      headers: {
        'Authorization': token
      }
    })
  }

  function sim() {
    navigate('/posts')
    //rota do frontend
    deleteId(`/postagens/${id}`, {
      //rota do swagger
      headers: {
        'Authorization': token
      }
    });
    alert('Que chato você deletou minha postagem favorita .-.')
  }

  function nao() {
    navigate('/posts')
  }

  return (
    <>
      <Box m={2}>
        <Card variant="outlined" >
          <CardContent>
            <Box justifyContent="center">
              <Typography color="textSecondary" gutterBottom>
                Deseja deletar a Postagem:
              </Typography>
              <Typography color="textSecondary" >
                {post?.titulo}
                {/*pega o título específico que vai ser deletado e mostra em tela */}
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
              <Box>
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
export default DeletarPostagem;