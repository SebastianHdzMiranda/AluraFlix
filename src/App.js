// libreries
import React from "react";
import styled from "styled-components";
import { Route, Router, Routes } from "react-router-dom";

// components
import GlobalStyled from "./globalStyled";
import { Container } from "@mui/material";
import Header from "./components/header/header";



function App() {
  return ( <>
    <Router>
      <GlobalStyled />
      <Header />
      <Routes >
        {/* <Route path="/"element={}/> */}
      </Routes>
    </Router>
    

  </>);
}

export default App;
