import styled from "styled-components";
import Card from "../card/card";


const Equipo = (props)=> {
    const {id, titulo, color, info} = props.datos;
    const {videos} = props;

    const EquipoStyled = styled.div`
        display: flex;
        justify-content: space-between;
        gap: 2rem;
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
        background-color: ${color};
        display: inline-block;
        padding-inline:  2.5rem;
        font-weight: 300;
        border-radius: 5px;

        @media (min-width: 768px) {
            font-size: 2.8rem;
        }

    `
    const InfoStyled = styled.p`
        font-size: 1.5rem;
    `

    return(<>
        {videos.length !== 0 && <div>
            {titulo && 
                <HeadingStyled>
                    <TituloStyled>{titulo}</TituloStyled>
                    <InfoStyled>{info}</InfoStyled>
                </HeadingStyled>
            }
            <EquipoStyled>
                {/* {!titulo && 
                    <>
                        <ImgStyled src={front1} />
                        <ImgStyled src={front2}/>
                        <ImgStyled src={front3}/>
                        <ImgStyled src={front4}/>
                        <ImgStyled src={front1} />
                        <ImgStyled src={front2}/>
                        <ImgStyled src={front3}/>
                        <ImgStyled src={front4}/>
                    </>

                } */}


                {videos.map((video, i)=> 
                    <Card 
                        video={video}
                        key={i}
                    />
                )}

            </EquipoStyled>
        </div>}
        
    </>)
}

export default Equipo;