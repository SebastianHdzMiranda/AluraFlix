import React, {createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";


// 
export const CounterContext = createContext();

// 
export const CounterProvider = ({ children }) => {
    // localStorage variables
    const videosStorage = JSON.parse(localStorage.getItem('videos')) || [];

    // useState
    const [equipos, setEquipos] = useState([
        {id: uuidv4(), titulo: 'Back End', color: '#9CD33B', info: 'Formación Back End de Alura Latam'},
        {id: uuidv4(), titulo: 'Innovación', color: '#FFBA05', info: 'Formación Innovación y Gestión de Alura Latam'},
        {id: uuidv4(), titulo: 'UX', color: '#6B5BE2', info: 'Formación UX'},
    ]);
    const [videos, setVideos] = useState(videosStorage || []);

    // useEffect
    useEffect(()=>{
        localStorage.setItem('videos', JSON.stringify(videos));
        // console.log(videos);
    }, [videos])

    // funciones
    function actualizarVideos(video) {
        setVideos([...videos, video]);
    }

    const values = {
        equipos,
        videos,
        actualizarVideos,

    }

    return(
        <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
    )
}