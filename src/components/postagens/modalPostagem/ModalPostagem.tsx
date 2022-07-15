import React from 'react';
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Box, Button, Modal } from '@mui/material';
import CadastroPost from '../cadastroPost/CadastroPost';
import CloseIcon from '@material-ui/icons/Close';
import './ModalPostagem.css';


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        //movimenta o elemento em x, y, z

    };
}
//centraliza a modal

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            boder: '2px solid #000',
            boxShadow: theme.shadows[5],
            //é a sombra

            padding: theme.spacing(2, 4, 3),
        },
    }),
);

function ModalPostagem() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    //guarda as informações para centralizar o modal

    const [open, setOpen] = React.useState(false);
    //useState já está sendo importado com essa configuração

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };
    //abre e fecha a model

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {/* modalStyle é utilizado aqui na div*/}
            <Box display="flex" justifyContent="flex-end" className="cursor">
                <CloseIcon onClick={handleClose} />
            </Box>

            <CadastroPost />
        </div>
    );

    return (
        <div>
            <Button
                variant='outlined'
                className='bntModal'
                onClick={handleOpen}>Nova Postagem</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby='simple-modal-title'
                aria-describedby='simple-modal-description'
            >
                {body}
            </Modal>
        </div>
    );
}

export default ModalPostagem;