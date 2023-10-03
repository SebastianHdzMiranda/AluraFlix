import styled from "styled-components";
import { colorPrimario, negro } from "../UI/variables";
import logo from '../../assets/img/logo.png';
import { Link, useLocation } from "react-router-dom";


const Footer = ()=>{

    const location = useLocation().pathname;

    const FooterStyled = styled.footer`
        background-color: ${negro};
        padding: 2rem 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-bottom: ${location === '/' ? '6rem' : '2rem'};
        @media (min-width: 768px) {
            padding: 2rem 0;
        }

    `;
    const Logo = styled.img`
        width: 20rem;
    `;
    const CopyRight = styled.p`
        font-size: 1.1rem;
        margin-bottom: 0;
        margin-top: 0.2rem;
    `;

    return(
        <FooterStyled>
            <Link to='/'><Logo src={logo} alt="logo"/></Link>
            <CopyRight>Todos los derechos reservados &copy;</CopyRight>
        </FooterStyled>
    );
}

export default Footer;