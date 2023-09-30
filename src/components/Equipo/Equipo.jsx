import styled from "styled-components";

import front1 from '../../assets/equipoFront/1.png'
import front2 from '../../assets/equipoFront/2.png'
import front3 from '../../assets/equipoFront/3.png'
import front4 from '../../assets/equipoFront/4.jpg'

const EquipoStyled = styled.div`
    display: flex;
    /* gap: 2rem; */
    justify-content: space-between;
    gap: 2rem;
    overflow-x: auto;
    &::-webkit-scrollbar {
        width: 0; /* Oculta la barra de desplazamiento horizontal */
    }
`

const ImgStyled = styled.img`
    height: 16rem;
    border-radius: 10px;
    @media (min-width: 768px) {
        height: 20rem;
    }
    @media (min-width: 1024px) {
        height: 25rem;
    }
`
const TituloStyled = styled.h2`
    margin-bottom: 1rem;
`

const Equipo = ({titulo})=> {
    return(
        <div>
            {titulo && <TituloStyled>{titulo}</TituloStyled>}
            <EquipoStyled>
                <ImgStyled src={front1} />
                <ImgStyled src={front2}/>
                <ImgStyled src={front3}/>
                <ImgStyled src={front4}/>
                <ImgStyled src={front1} />
                <ImgStyled src={front2}/>
                <ImgStyled src={front3}/>
                <ImgStyled src={front4}/>
            </EquipoStyled>
        </div>
    )
}

export default Equipo;