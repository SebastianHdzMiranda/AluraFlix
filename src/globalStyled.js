
import { createGlobalStyle } from 'styled-components';
import { blanco, negro } from './components/UI/variables';
import hexToRgba from 'hex-to-rgba';

const GlobalStyled = createGlobalStyle`
    html {
        font-size: 62.5%;
        box-sizing: border-box;
    }
    *, *:before, *:after {
        box-sizing: inherit;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-size: 1.6rem;
        color: ${blanco};
        background-color: #1e1e1e;

        @media (min-width: 768px) {
            padding-bottom: 0;
        }
    }

    p {
        color: ${blanco};
        font-size: 2rem;
    }

    img {
        max-width: 100%;
        display: block;
        height: auto;
        width: auto;
    }
    ul {
        padding: 0;
        list-style: none;
        margin: 0;
    }

    h1, h2, h3 {
        margin: 0;
        line-height: 1.5;
    }
    h1 {
        font-size: 4rem;
    }
    h2 {
        font-size: 2.8rem;
    }
    h3 {
        font-size: 2.4rem;
    }
    a {
        text-decoration: none;
    }
`;

export default GlobalStyled;