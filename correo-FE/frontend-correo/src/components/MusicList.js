import * as React from 'react';
    
// mui components
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Paper from '@mui/material/Paper';


// custom components
import BottomNav from './BottomNav';
import MusicListItem from './MusicListItem';

// data
import { useMusicContext } from '../contexts/MusicContext';

// icons
import {
    
    PetsOutlined,
    LocationOn,
    MusicNote,
    ViewComfyAltRounded,
    Vignette
} from '@mui/icons-material';

export default function MusicList() {
    const { Musics } = useMusicContext();
    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {
                    Musics && Musics.map(
                        ({id, attributes: {nombreGrupo, valor, vigencia}}, i)=>(
                        <MusicListItem
                            key={i}
                            id={id}
                            MusicType={nombreGrupo}
                            MusicFieldData={[
                                {icon: <MusicNote/>, attrib: nombreGrupo},
                                {icon: <ViewComfyAltRounded/>, attrib: valor},
                                {icon: <Vignette/>, Boolean: vigencia},
                                
                            ]} 
                        />
                    ))
                }
            </List>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNav/>
            </Paper>
        </Box>
    );
};