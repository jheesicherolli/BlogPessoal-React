import React, {useState} from 'react';
import { Typography, AppBar, Tab, Tabs } from '@material-ui/core';
import {Box} from '@mui/material';
import {TabContext, TabPanel} from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';

function TabPostagem() {

    const[value, setValue] = useState('1')
    // setValue = alterna os valores, ex: 1->2; 2->1
    // useState('1') = significa que será iniciado com o 1


    //newValue = responsável por armazenar o valor do click
    //setValue(newValue) = capturar o valor contido da variável newValue atribuindo ao state, com tudo isso ela modifica a variável value
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue)
    }

    return (
        <>
            <TabContext value={value}>
                <AppBar position="static">
                    <Tabs centered indicatorColor="secondary" onChange={handleChange}>
                        <Tab label="Todas as Postagens" value="1" />
                        <Tab label="Sobre Nós" value="2" />
                    </Tabs>
                </AppBar>
                <TabPanel value="1">
                    <Box display="flex" flexWrap="wrap" justifyContent="center">
                        <ListaPostagem />
                    </Box>
                </TabPanel>
                <TabPanel value="2">
                    <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="justify" className='titulo'>
                        Sobre Nós
                    </Typography>
                    <Typography variant="body1" gutterBottom color="textPrimary" align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia doloribus error, voluptates cum omnis consectetur obcaecati aliquam consequuntur explicabo illo debitis minima, corrupti commodi provident quidem rerum. Fugit, corporis laborum? Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias adipisci beatae quaerat, laboriosam veniam aut quo. Facere doloremque fuga optio voluptates nisi culpa! Aliquid ducimus sapiente perferendis aliquam, eius non!
                    </Typography>
                </TabPanel>
            </TabContext>
        </>
    );
}

export default TabPostagem;

/**TabContext = envolve todos os elementos, funciona como um container das guias
 * Tab = abas, cada uma possui um valor (ex:value=1)
 * TabPanel = panel, com ele é possível direcionar as tabs
 * useState vai capturar o valor e a medida que for sendo alterado é possível exibir o painel 1 ou 2
 * 
 */