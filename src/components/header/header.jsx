import styled from "styled-components";

import logo from '../../../src/assets/img/logo.png';
import { Container } from "@mui/material";
import { negro, colorPrimario, blanco } from "../UI/variables";
import { Btn } from "../UI";

const HeaderStyled = styled.header`
    background-color: ${negro};
    border-bottom: 2px solid ${colorPrimario};
    padding: 2.5rem 0;
`;
const Logo = styled.img`
    width: 16.8rem;
`;
const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Header = ()=> {
    return(
        <HeaderStyled>
            <Container maxWidth='xl'>
                <ContainerStyled>
                    <Logo src={logo} alt="logo"/>
                    <Btn>Nuevo Video</Btn>
                </ContainerStyled>
            </Container>
        </HeaderStyled>
    );
};

export default Header;