import Equipo from "../Equipo/Equipo";
import { Container } from "@mui/material";
import { useContext } from "react";
import styled from "styled-components";
import { CounterContext } from "../../context";

const EquiposStyled = styled.section`
    margin-top: 4rem;
    margin-bottom: 6rem;
    position: relative;
    @media (min-width: 768px) {
        margin-top: -7rem;
    }
    @media (min-width: 1024px) {
        margin-top: -8rem;
    }
`

const EquiposContainer = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        gap: 1rem;
    }
`



const Equipos = ()=> {
    // context
    const counterData = useContext(CounterContext);
  

    return(
        <EquiposStyled>
            <Container maxWidth='xl'>
                <EquiposContainer>
                    <Equipo datos='' videos={[]}/>

                    { //aqui añadir el arreglo del estado videos
                        counterData.equipos.map((equipo, i)=>
                            <Equipo 
                                datos= {equipo}
                                key={i}
                                videos={counterData.videos.filter((video)=> video.equipo === equipo.titulo)}
                            />
                        )
                    }


                </EquiposContainer>
            </Container>
        </EquiposStyled>
    )
}

export default Equipos;