import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { negro } from "../UI/variables";
import { Btn } from "../UI";

const DivStyled = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 12;
    transform: translate(-50%, -50%);
    background-color: ${negro};
    color: white;
    padding: 5rem;
    border-radius: 4px;
    text-align: center;

`
const ParrafoStyled = styled.p`
    font-size: 3rem;
`


const Exito = ()=>{
    return(
        <DivStyled>
            <ParrafoStyled>Se añadio satisfactoriamente</ParrafoStyled>
            <Btn to='/'>Ir a Home</Btn>
        </DivStyled>
    )
}

export default Exito;