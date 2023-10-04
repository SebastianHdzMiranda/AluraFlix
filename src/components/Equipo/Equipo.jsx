import styled from "styled-components";
import Card from "../card/card";
import { useContext } from "react";
import { CounterContext } from "../../context";


const Equipo = (props)=> {
    // props
    const {id, titulo, color, info} = props.datos;
    const {videos} = props;


    const EquipoStyled = styled.div`
        display: flex;
        gap: .5rem;
        align-items: center;
        overflow-x: auto;

        &::-webkit-scrollbar {
            width: 0; /* Oculta la barra de desplazamiento horizontal */
        }
    `
    const HeadingStyled = styled.div`
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-bottom: 1.5rem;
    `
    const TituloStyled = styled.h2`
        font-size: 2rem;
        /* background-color: ${color}; */
        display: inline-block;
        padding-inline:  2.5rem;
        font-weight: 700;
        border-radius: 5px;

        @media (min-width: 768px) {
            font-size: 2.6rem;
        }

    `

    return(<>
        {videos.length !== 0 && 
            <div>
                {titulo && 
                    <HeadingStyled>
                        <TituloStyled>{titulo}</TituloStyled>
                    </HeadingStyled>
                }
                <EquipoStyled>

                    {videos.map((video, i)=> 
                        <Card 
                            video={video}
                            key={i}
                        />
                    )}

                </EquipoStyled>
            </div>
        }
        
    </>)
}

export default Equipo;