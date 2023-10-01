import Equipo from "../Equipo/Equipo";
import { Container } from "@mui/material";
import styled from "styled-components";

const EquiposStyled = styled.section`
    margin-top: 6rem;
    margin-bottom: 6rem;
    position: relative;
    @media (min-width: 768px) {
        margin-top: -6rem;
    }
`

const EquiposContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`



const Equipos = ({equipos, videos})=> {


    return(
        <EquiposStyled>
            <Container maxWidth='xl'>
                <EquiposContainer>
                    <Equipo datos='' videos={[]}/>

                    { //aqui añadir el arreglo del estado videos
                        equipos.map((equipo, i)=>
                            <Equipo 
                                datos= {equipo}
                                key={i}
                                videos={videos.filter((video)=> video.equipo === equipo.titulo)}
                            />
                        )
                    }


                </EquiposContainer>
            </Container>
        </EquiposStyled>
    )
}

export default Equipos;