import styled from "styled-components";
import { colorPrimario, negro } from "../UI/variables";
import logo from '../../../src/assets/img/logo.png';
import { Link } from "react-router-dom";

const FooterStyled = styled.footer`
    background-color: ${negro};
    border-top: 2px solid ${colorPrimario};
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
`

const Footer = ()=>{
    return(
        <FooterStyled>
            <Link to='/'><Logo src={logo} alt="logo"/></Link>
            <CopyRight>Todos los derechos reservados &copy;</CopyRight>
        </FooterStyled>
    );
}

export default Footer;