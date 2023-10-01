// libreries
import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import {BrowserRouter, Routes, Route } from "react-router-dom";

// components
import GlobalStyled from "./globalStyled";
import Header from "./components/header/header";
import Home from "./pages/home";
import Formulario from "./pages/formulario";
import Footer from "./components/footer/footer";



function App() {
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
    console.log(videos);
  }, [videos])


  // funciones
  function actualizarVideos(video) {
    setVideos([...videos, video]);
  }

  return ( <>
    <GlobalStyled />
    <BrowserRouter>
      <Header />
      <Routes >
        <Route 
          path="/" 
          element={<Home equipos={equipos} videos={videos} />} 
        />


        <Route 
          path="/formulario" 
          element={
            <Formulario 
              equipos={equipos.map((equipo)=>equipo.titulo)}
              videos={videos} 
              actualizarVideos={actualizarVideos}
            />
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
    

  </>);
}

export default App;
