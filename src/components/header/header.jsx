import styled from "styled-components";
import logo from '../../assets/img/logo.png';
import { Container } from "@mui/material";
import { negro, colorPrimario, blanco } from "../UI/variables";
import { BtnHeader } from "../UI";
import { Link, useLocation,  } from "react-router-dom";
import { useEffect, useState } from "react";
import {RxHamburgerMenu} from 'react-icons/rx'

const HeaderStyled = styled.header`
    /* background-color: #141414; */
    background-color: ${(props) => (props.scrolling ? '#141414e4' : 'transparent')};
    transition: all .3s ease-in;
    padding: 1.4rem 0;
    position: fixed;
    top: 0;
    z-index: 100;
    width: 100%;
    @media (min-width: 768px) {
        padding: 1.6rem 0;
        
    }
`;
const Logo = styled.img`
    width: 11rem;
    @media (min-width: 768px) {
        width: 12rem;
    }
`;
const ContainerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
        justify-content: start;
        gap: 4rem;
    }
`;
const EnlaceStyled = styled.a`
    color: ${blanco};
    font-size: 1.2rem;
    padding: .6rem 1.2rem;
`
const DivStyled = styled.div`
    @media (min-width: 768px) {
        display: flex;
        justify-content: space-between; 
        align-items: center;
        width: 100%;
    }

`
const DivEnlaces = styled.div`
    display: none;
    @media (min-width: 768px) {
        display: unset;
    }
`
const IconStyled = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: -6px;
    @media (min-width: 768px) {
        display: none;
    }
`


const Header = ()=> {
    // entrega la url (especificamente el path)
    const location = useLocation().pathname;

    // scroll
    const [scrolling, setScrolling] = useState(false);
  

    useEffect(() => {
        // Función para manejar el desplazamiento
        function handleScroll() {
          if (window.scrollY > 40) {
            setScrolling(true);
          } else {
            setScrolling(false);
          }
        }
    
        // Agrega un event listener para el evento de desplazamiento
        window.addEventListener('scroll', handleScroll);
    
        // Limpia el event listener al desmontar el componente
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <HeaderStyled scrolling={scrolling}>
            <Container maxWidth='xl'>
                <ContainerStyled>
                    
                    <Link to='/'><Logo src={logo} alt="logo"/></Link>
                    
                    <DivStyled>
                        <DivEnlaces>
                            <EnlaceStyled href="#">Home</EnlaceStyled>
                            <EnlaceStyled href="#">Mi lista</EnlaceStyled>
                            <EnlaceStyled href="#">Qué hay de nuevo</EnlaceStyled>
                            <EnlaceStyled href="#">Epocas</EnlaceStyled>
                        </DivEnlaces>

                        {location === '/' && <BtnHeader to='/formulario'>Nuevo Video</BtnHeader>}

                        <IconStyled>
                            <RxHamburgerMenu color="white" fontSize='2rem' />
                        </IconStyled>
                    </DivStyled>
                
                </ContainerStyled>
            </Container>
        </HeaderStyled>
    );
};

export default Header;