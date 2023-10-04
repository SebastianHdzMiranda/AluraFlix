import styled from "styled-components";
import { Button } from "@mui/material";
import { blanco, colorPrimario } from "./variables";
import { Link } from "react-router-dom";


export const Btn = styled(Link)`
    cursor: pointer;
    color: ${blanco};
    padding: 1.5rem 4rem;
    border-radius: .4rem;
    background-color: ${colorPrimario};
    border: none;
`;

export const BtnHeader = styled(Btn)`
    color: ${blanco};
    position: fixed;
    z-index: 10;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    text-align: center;
    background-color: #141414;
    /* display: none; */
    
    @media (min-width: 768px) {
        border-radius: .4rem;
        border: 1px solid ${blanco};
        background-color: transparent;
        position: unset;
        padding: 1rem 2.5rem;
        width: unset;
        display: unset;
    }
`;

