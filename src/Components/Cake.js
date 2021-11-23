
import StarBorderIcon from '@mui/icons-material/StarBorder'
import { Star, Close as CloseIcon } from '@mui/icons-material'
import InfoIcon from '@mui/icons-material/Info';
import {ImageListItem, ImageListItemBar, IconButton, styled, Dialog, DialogContent, DialogTitle } from "@mui/material"
import { useState } from 'react';

export default function Cake({ cake, onAddFav }) {

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(1),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    const Typography = (props) => {
        const { children, onClose, ...other } = props;

        return (
            <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
                {children}
                {onClose ? (
                    <IconButton
                        aria-label="close"
                        onClick={onClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                ) : null}
            </DialogTitle>
        )
    }

    function handleFavorite() {
        onAddFav(cake.id)
    }

    return (
        <ImageListItem>
            <img src={cake.image} alt={cake.title} loading={'lazy'} />
            <ImageListItemBar
                sx={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                    borderRadius: '10px'
                }}
                position={'top'}
                actionIcon={
                    <IconButton sx={{ color: 'white' }} onClick={handleFavorite}>
                        {cake.favorite ? <Star /> : <StarBorderIcon />}
                    </IconButton>
                }
            />
            <ImageListItemBar
                sx={{
                    borderRadius: '10px', background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, ' +
                        'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                }}
                title={cake.title}
                actionIcon={
                    <IconButton
                        sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                        aria-label={`info about ${cake.title}`}
                        onClick={handleClickOpen}
                    >
                        <InfoIcon />
                    </IconButton>
                }
                actionPosition={'left'}
            />
            <BootstrapDialog
                onClose={handleClickOpen}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <Typography onClose={handleClickOpen}>
                    {cake.title}
                </Typography>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {cake.detailDescription}
                    </Typography>
                </DialogContent>
            </BootstrapDialog>
        </ImageListItem>
    )
}