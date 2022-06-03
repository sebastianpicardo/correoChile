import React from 'react';
    
    // custom component
    import MusicList from '../components/MusicList';
    import CreateMusicEntry from '../components/CreateMusicEntry';
    import EditMusicEntry from '../components/EditMusicEntry';
    
    // contexts
    import { useMusicContext } from '../contexts/MusicContext';
    const Interface = () => {
        const { nav_value } = useMusicContext();
        
        switch (nav_value) {
            case "MusicList":
                return <MusicList/>
            case "AddMusic":
                return <CreateMusicEntry/>
            case "EditMusic":
                return <EditMusicEntry/>
            default:
                return <MusicList/>
        };
    };
    export default Interface;