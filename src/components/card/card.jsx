import { Link } from "react-router-dom"
import styled from "styled-components"

import front1 from '../../assets/equipoFront/1.png'
import { blanco } from "../UI/variables";
// import front2 from '../../assets/equipoFront/2.png'
// import front3 from '../../assets/equipoFront/3.png'
// import front4 from '../../assets/equipoFront/4.jpg'

const ImgStyled = styled.img`
    height: 15rem;
    object-fit: cover;
    width: 100%;
    border-radius: 10px;
    @media (min-width: 768px) {
        height: 20rem;
    }
    @media (min-width: 1024px) {
        height: 25rem;
    }
`;

const DivStyled = styled.div`
    min-width: 25rem;
    flex-basis: 25rem;
    @media (min-width: 768px) {
        min-width: 35rem;
    }
    @media (min-width: 1024px) {
        min-width: 40rem;
    }
    text-align: center;

`
const ParrafoStyled = styled.p`
    font-size: 1.7rem;
    display: inline-block;
`



const Card = ({video})=>{
    console.log(video);
    return(
    
        <DivStyled>
            <Link to={`/${video.id}`}>
                <ImgStyled src={video.imagen} />
                <ParrafoStyled>{video.titulo}</ParrafoStyled>
                
            </Link>
        </DivStyled>
    
    )
}

export default Card;