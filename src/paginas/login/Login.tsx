import React, { ChangeEvent, useState, useEffect } from "react";
import { Grid, Typography, TextField, Button } from "@material-ui/core";
import { Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { login } from '../../services/Service';
import UserLogin from "../../models/UserLogin";
import './Login.css';
import { useDispatch } from "react-redux";
import { addToken } from "../../store/tokens/actions";
import { toast } from "react-toastify";

function Login() {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const [token, setToken] = useState('');
    //controle do token dentro do localStorage

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            nome: "",
            usuario: "",
            senha: "",
            foto: "",
            token: ""

        }
    )
    //userLogin = acessar o valor
    // setUserLogin = pode alterar o estado do componente
    // useState<UserLogin> = é o que ele está recebendo, () são os parâmetros do useState, ou seja o valor inicial do estado do componente


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        //updatedModel = atualização da model, trabalhando em conjunto com o useState
        //HTMLInputElement = interface em typescript que faz a manipulação de elementos input de campos de texto HTML

        setUserLogin({
            ...userLogin,
            //... espalha todos os atributos que tem dentro de userLogin para dentro da função setUserLogin
            // as {} é por estar recebendo como parâmetro um objeto
            [e.target.name]: e.target.value
            //name = nome da propriedade para identificação do campo | value = valor digitado pelo usuário
        })
    }
    //resumo da função: vai atualizar a model com os valores que o usuário colocar no campo de input, 

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token));
            navigate('/home', { replace: true });
        }
    }, [token])
    //responsável pelo controle de ciclo de vida do componente


    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        //onSubmit = responsável por enviar os dados da requisição 

        e.preventDefault();
        //previne que o botão atualize a página 
        try {
            await login(`/usuarios/logar`, userLogin, setToken)
            /*responsável por gravar o token que vem da api no localStorage e deixamos o Service responsável pela regra de negócio, 
            com isso já é possível fazer a autenticação do login*/

            toast.success('Aí sim emm, pode entrar!!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } catch (error) {
            toast.error('Hmm não foi dessa vez, tente de novo :/', {
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

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1' >Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='  Usuário' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            {/* <Link to='/home' className='text-decorator-none'> só pode ser usado quando não há uma necessidade de autenticação/segurança*/}
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                            {/* </Link> */}
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center' >Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrousuario'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
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
//onChange verifica e aguarda alguma mudança, pra poder acionar a função updatedModel e capturar o que o usuário digitou por meio do nome do campo por meio do TextField
//(e) contém toda a modificação feita no TextField
//try{}catch{} = tentativa de execução(ocorre dentro do try), caso de errado ele retorna o erro(relatado dentro do catch)

/*************Teste do onSubmit*****************/
// console.log('userLogin: ' + Object.values(userLogin));
//verifica se os dados de userLogin estão corretos e mostra os resultados
//Object.values(userLogin) = retornar todos os dados inseridos, tendo o userLogin como parâmetro
//useHistory = responsável por redirecionar para a tela home se estiver tudo ok
//useLocalS = gravar o token que a api devolver no LocalStorage do navegado, como se fosse um armazenamento interno do navegador(browser)