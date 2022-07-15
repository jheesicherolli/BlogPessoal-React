import axios from 'axios';
//axios vai inteceptar todas as requisições

export const api = axios.create({
    baseURL: 'https://bloggeneration.herokuapp.com'
})
/**aqui o axios é colocado dentro de um objeto chamado 'api' para ser consumido,
com isso o 'api' recebe todas as funcionalidades que o axios possui
create = permite armazenar dentro do axios o endereço da 'api'
baseURL = é quem de fato armazena o endereço da 'api', já com o endereço o axios consegue operar dentro da aplicação
*/

export const cadastroUsuario = async (url: any, dados: any, setDado: any) => {
    const resposta = await api.post(url, dados)
    setDado(resposta.data)
}
//conexão com a api, para que o cadastro seja realizado


export const login = async (url: any, dados: any, setDado: any) =>
//metódo de requisição dentro da api(backend)
{
    const resposta = await api.post(url, dados)
    // metódo post da api está sendo acionado, tendo como parâmetro url e dados
    setDado(resposta.data.token)
    //vai conter todos os da resposta da api(nomeUsuario, senha, token)
}

/*export const login = torna acessível fora do login
url = concatenação da baseURL com a url de login(/usuarios/logar)
dados= contém os dados enviados para api (usuario e senha), o objeto json fica armazenado dentro dele
setDado = resposta da api, objeto json contendo os dados do usuario e o token(usado para autenticar o usuario)
*/

//com todas essas informações é possível realizar a autenticação do usuario

export const busca = async (url: any, setDado: any, header: any) =>
//passa a url, dados e a autenticação e é um Get na api
{
    const resposta = await api.get(url, header)
    //confirma se o usuário é autenticado e armazena na resposta
    setDado(resposta.data)
    //apos o armazenamento é atribuido ao setDado que captura todos os valores da requisiçao
}
//com tudo isso é possível atribuir no front por meio do hook (ex:useState)

/**header: any = passa o token para autenticar a requisição, ou seja só será listado se o usuário estiver logado
   os dados retornados da api são armazenados na variável resposta
*/

export const buscaId = async (url: any, setDado: any, header: any) => {
    const resposta = await api.get(url, header)
    setDado(resposta.data)
}

export const post = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.post(url, dados, header)
    setDado(resposta.data)
}

export const put = async (url: any, dados: any, setDado: any, header: any) => {
    const resposta = await api.put(url, dados, header)
    setDado(resposta.data)
}

export const deleteId = async (url: any, header: any) => {
    await api.delete(url,header)
    
}