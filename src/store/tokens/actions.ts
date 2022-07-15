export type Action = { type: "ADD_TOKEN"; payload: string };

export const addToken = (token: string): Action => ({
    type: "ADD_TOKEN",
    payload: token,
    //recebe o token e armazena em payload
});
 /*paylod = armazenar o token
*/