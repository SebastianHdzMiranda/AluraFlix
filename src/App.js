// libreries
import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";


// components
import GlobalStyled from "./globalStyled";
import Header from "./components/header/header";
import Home from "./pages/home";
import Formulario from "./pages/formulario";
import Footer from "./components/footer/footer";



function App() {

  return ( <>
    <GlobalStyled />
    <BrowserRouter>
      <Header />
      <Routes >
        <Route 
          path="/" 
          element={<Home />} 
        />


        <Route 
          path="/formulario" 
          element={
            <Formulario />
          } 
        />
      </Routes>
      <Footer />
    </BrowserRouter>
    

  </>);
}

export default App;
