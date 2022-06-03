import React, { useState, useEffect } from 'react';
    
// mui components
import {
    Typography,
    TextField,
    Box,
    Button,
    Paper
} from '@mui/material';

// mui icons
import { Edit } from '@mui/icons-material';

// custom components
import BottomNav from './BottomNav';

//axios
import { useMusicContext } from '../contexts/MusicContext';
export default function EditMusicEntry() {
    // input data
    const [nombreGrupo, setNombreGrupo] = useState("");
    const [valor, setValor] = useState("");
    const [vigencia, setVigencia] = useState("");
    
    // editar
    const { updateMusic, MusicId } = useMusicContext();
    const data = JSON.stringify({
        "data": {
            "nombreGrupo": nombreGrupo,
            "valor": valor,
            "vigencia": vigencia            
        }
    });
    const handleEditMusic = () => {
        updateMusic(MusicId, data);
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
                    Edtitar grupo
                </Typography>
                <TextField
                    required
                    id="filled-nombreGrupo"
                    label="nombre Grupo"
                    variant="outlined"
                    onChange={(e)=>setNombreGrupo(e.target.value)}
                />
                <TextField
                    required
                    id="filled-valor"
                    label="valor"
                    variant="outlined"
                    
                    onChange={(e)=>setValor(e.target.value)}
                />
                <TextField
                    required
                    id="filled-vigencia"
                    label="vigencia"
                    variant="outlined"
                    onChange={(e)=>setVigencia(e.target.value)}
                />
                
            </div>
            <div>
                <Button variant="outlined" onClick={handleEditMusic} startIcon={<Edit />}>
                    Editar Grupo
                </Button>
            </div>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
}