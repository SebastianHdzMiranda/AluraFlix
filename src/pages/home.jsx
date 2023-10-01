import React, { useState } from "react";
import Banner from "../components/banner/banner";
import Equipos from "../components/Equipos/Equipos";
import styled from "styled-components";


const Home = ({equipos, videos})=> {

    return( <>
        <Banner />
        <Equipos equipos={equipos} videos={videos}/>
    </>)
}

export default Home;