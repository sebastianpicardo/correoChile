import * as React from 'react';
    
// core components
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { SearchOutlined } from '@mui/icons-material';
// icons
import {
    PetsOutlined,
    AddCircleOutline,
    MusicVideo,
    CreateNewFolder
} from '@mui/icons-material';


// contexts
import { useMusicContext } from '../contexts/MusicContext';

export default function LabelBottomNavigation() {
    const { nav_value, changeNavValue } = useMusicContext();
    const handleChange = (event, newValue) => {
        changeNavValue(newValue);
    };
    return (
        <BottomNavigation showLabels value={nav_value} onChange={handleChange}>
            <BottomNavigationAction
                label="Grupos Musicales"
                value="MusicList"
                icon={<MusicVideo />}
            />
            <BottomNavigationAction
                label="Crear grupo musical"
                value="AddMusic"
                icon={<CreateNewFolder />}
            />
        </BottomNavigation>
    );
};