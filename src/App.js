// libreries
import React, { useEffect } from "react";
import {BrowserRouter, Routes, Route, useLocation } from "react-router-dom";


// components
import GlobalStyled from "./globalStyled";
import Header from "./components/header/header";
import Home from "./pages/home";
import Formulario from "./pages/formulario";
import Footer from "./components/footer/footer";
import Post from "./components/post/post";



function App() {

  return ( <>
    <GlobalStyled />
    <BrowserRouter>
      <ScrollToTopOnRouteChange />
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

        <Route 
          path="/post/:id" 
          element={
            <Post />
          } 
        />


      </Routes>
      <Footer />
    </BrowserRouter>
    

  </>);
}

// Este componente permite que al cambiar de Route el contenido se muestre desde el top del scroll
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default App;
