import React, { useState } from 'react';
    
// mui components
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';

// icons components
import { Add } from '@mui/icons-material';

// custom components
import BottomNav from './BottomNav';
import { useMusicContext } from '../contexts/MusicContext';
export default function CreateMusicEntry() {
    // input data
    const [nombreGrupo, setNombreGrupo] = useState("");
    const [valor, setValor] = useState("");
    const [vigencia, setVigencia] = useState("");
    // axios
    const { createNewMusic } = useMusicContext();
    const data = JSON.stringify({
        "data": {
            "nombreGrupo": nombreGrupo,
            "valor": valor,
            "vigencia": vigencia            
        }
    })
    const handleCreateNewMusic = () => {
        createNewMusic(data);
    };
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '50ch' },
                display: 'flex',
                flexDirection: 'column'
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <Typography variant="h3" gutterBottom component="div">
                    Agregar nuevo grupo musical.
                </Typography>
                <TextField
                    required
                    id="filled-name"
                    label="Grupo Musical"
                    variant="filled"
                    onChange={(e)=>setNombreGrupo(e.target.value)}
                />
                <TextField
                    required
                    id="filled-animal"
                    label="Valor"
                    variant="filled"
                    
                    onChange={(e)=>setValor(e.target.value)}
                />
                <TextField
                    required
                    id="filled-breed-input"
                    label="Vigencia"
                    variant="filled"
                    onChange={(e)=>setVigencia(e.target.value)}
                />
                
            </div>
            <div>
                <Button onClick={handleCreateNewMusic} variant="outlined" startIcon={<Add />}>
                    Agregar Grupo
                </Button>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
}