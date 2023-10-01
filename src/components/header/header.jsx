import styled from "styled-components";

import logo from '../../../src/assets/img/Logo.png';
import { Container } from "@mui/material";
import { negro, colorPrimario } from "../UI/variables";
import { BtnHeader } from "../UI";
import { Link, useLocation,  } from "react-router-dom";

const HeaderStyled = styled.header`
    background-color: ${negro};
    border-bottom: 2px solid ${colorPrimario};
    padding: 2rem 0;
    @media (min-width: 768px) {
        padding: 2rem 0;
    }
`;
const Logo = styled.img`
    width: 16.8rem;
`;
const ContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: space-between;
    }
`;



const Header = ()=> {
    // entrega la url (especificamente el path)
    const location = useLocation().pathname;
  

    return(
        <HeaderStyled>
            <Container maxWidth='xl'>
                <ContainerStyled>
                    <Link to='/'><Logo src={logo} alt="logo"/></Link>
                    
                    {location === '/' && <BtnHeader to='/formulario'>Nuevo Video</BtnHeader>}
                </ContainerStyled>
            </Container>
        </HeaderStyled>
    );
};

export default Header;