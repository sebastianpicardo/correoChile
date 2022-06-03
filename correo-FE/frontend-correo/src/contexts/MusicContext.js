import React, { createContext, useContext, useEffect, useState } from 'react';
import http from '../http';
const MusicContext = createContext();

export const useMusicContext = () => {
    return useContext(MusicContext);
};

export const MusicProvider = ({children}) => {
    const [Musics, setMusics] = useState("");
    const [nav_value, set_nav_value] = useState("MusicList");
    const [MusicId, setMusicId] = useState("");
    
    // add new Music
    const createNewMusic = async (data) => {
        await http.post("/api/grupo-musicals", data);
    };
    // update a Music entry
    const updateMusic = async (MusicId, data) => {
        await http.put(`/api/grupo-musicals/${MusicId}`, data);
    };
    // delete a Music entry
    const deleteMusic = async (MusicId) => {
        await http.delete(`/api/grupo-musicals/${MusicId}`);
    };
    // change navigation value
    const changeNavValue = (value) => {
        set_nav_value(value);
    };
    // get Music id value
    const getMusicId = (id) => {
        setMusicId(id);
    };

    useEffect(()=>{
        const readAllMusics = async () => {
            const response = await http.get("/api/grupo-musicals");
            const responseArr = Object.values(response.data.data);
            setMusics(responseArr);
        };
        return readAllMusics;
    }, []);

    const value = {
        createNewMusic,
        Musics,
        updateMusic,
        deleteMusic,
        changeNavValue,
        nav_value,
        getMusicId,
        MusicId
    };

    // context provider
    return(
        <MusicContext.Provider value={value}>
            {children}
        </MusicContext.Provider>
    )
}; 