import styled from 'styled-components';
import {BsFillPlayFill} from 'react-icons/bs'
import banner from '../../assets/img/banner.jpg'
import player from '../../assets/img/u2.jpg'
import top from '../../assets/img/top10.svg'
import { Container } from '@mui/material';

import { Btn } from '../UI';
import { colorSecundario, blanco, negro } from '../UI/variables';

const BannerContainer = styled.section`

    height: 0;
    background-image: url(${banner});
    background-size: cover;
    background-position: 70% center;
    overflow: hidden;
    padding-bottom: 170%;
    position: relative;
    min-height: 30rem;

    &::before{
        content: '';
        position: absolute;
        background-color: rgba(0, 18, 51, 0.331);        
        width: 100%;
        height: 100%;
    }

    @media (min-width: 480px) {
        padding-bottom: 75%;
    }
    @media (min-width: 768px) {
        background-position: center;
    }
    @media (min-width: 1024px) {
        padding-bottom: 47%;
    }
`;
const DivStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: end;
    height: 100%;
    padding-bottom: 3rem;
    width: 100%;
    left: 0;
    text-align: center;

    @media (min-width: 768px) {
        padding-bottom: 0;
        flex-direction: row;
        text-align: start;
        gap: 4rem;
    }
    @media (min-width: 1024px) {
        gap: 6rem;
    }
`
const InfoContainer = styled.div`
    @media (min-width: 768px) {
        flex: 1;
    }
`
const FrontStyled = styled.p`
    background-color: ${colorSecundario};
    display: none;
    color: ${blanco};
    padding: 1rem 2rem;
    font-size: 3rem;
    margin: 0 0  1.5rem 0;
    font-weight: 300;
    border-radius: 5px;
    @media (min-width: 768px) {
        display: inline-block;
    }
    @media (min-width: 1024px) {
        display: inline-block;
        font-size: 5rem;
        margin: 2rem 0  3.5rem 0;
    }
`

const TituloStyled = styled.h1`
    font-size: 3rem;
    font-weight: 300;
    margin-bottom: 1.2rem;
    @media (min-width: 768px) {
        font-size: 4rem;
        font-weight: 400;
    }
    @media (min-width: 1024px) {
        line-height: 1.2;
        font-size: 4.5rem;
    }
`
const ParrafoStyled = styled.p`
    font-weight: 300;
    line-height: 1.4;
    margin-top: 0;
    display: none;
    margin: 0 0 3rem 0;

    @media (min-width: 768px) {
        display: block;
        font-size: 1.6rem;
    }

    @media (min-width: 1024px) {
        font-size: 1.7rem;
    }
`
const ImgStyled = styled.img`
    border-radius: 10px;
    display: none;
    @media (min-width: 768px) {
        display: block;
        width: 42vw;
    }
    @media (min-width: 1024px) {
        /* width: 55rem; */
        /* width: 4vw; */
        /* width: unset; */

    }
`;

const BtnStyled = styled(Btn)`
    padding: 1.3rem 4rem 1.3rem 3rem;
    font-size: 1.8rem;
    display: flex;
    gap: .5rem;
    align-items: center;
    justify-content: center;
    line-height: 0;
    color: ${negro};
    background-color: ${blanco};
    font-weight: 700;
    width: 100%;
    @media (min-width: 768px) {
        /* display: none; */
        width: max-content;
    }

`
const TopDiv = styled.div`
    display: flex;
`
const TopImg = styled.img`
    margin-right: 1rem;
`
const TopText = styled.p`
    font-weight: 700;
    font-size: 2.5rem;
`

const Banner = ()=> { return <>
    <BannerContainer>
        <Container maxWidth='xl' sx={{height: '100%', position: 'absolute', left: '0', right: '0'}}>
            <DivStyled> 
                <InfoContainer>
                    {/* <FrontStyled>Front End</FrontStyled> */}
                    <TituloStyled>Nuevos tracks</TituloStyled>
                    <TopDiv>
                        <TopImg src={top}/>
                        <TopText>N°2 en Francia hoy</TopText>
                    </TopDiv>
                    <ParrafoStyled>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</ParrafoStyled>
                    

                    
                    <BtnStyled><BsFillPlayFill color='black' size='3rem'/>Escuchar</BtnStyled>
                </InfoContainer>   
                <div>
                    <ImgStyled src={player} alt='Player' />
                </div>            
            </DivStyled>
        </Container>
    </BannerContainer>
</>};

export default Banner;