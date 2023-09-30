import styled from "styled-components";
import Equipo from "../Equipo/Equipo";
import { Container } from "@mui/material";

const EquiposStyled = styled.section`
    margin-top: 6rem;
    margin-bottom: 6rem;
    position: relative;
    @media (min-width: 768px) {
        margin-top: -5rem;
    }
`

const EquiposContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5rem;
`

const Equipos = ()=> {
    return(
        <EquiposStyled>
            <Container maxWidth='xl'>
                <EquiposContainer>
                    <Equipo />
                    <Equipo titulo='Back End' />
                    <Equipo titulo='Innovación'/>
                </EquiposContainer>
            </Container>
        </EquiposStyled>
    )
}

export default Equipos;