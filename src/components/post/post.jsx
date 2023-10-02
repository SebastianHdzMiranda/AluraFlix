import { useParams } from "react-router-dom";
import { useContext } from "react";
import { CounterContext } from "../../context";
import { Container } from "@mui/material";
import styled from "styled-components";

const Post = ()=> {
    const counterData = useContext(CounterContext);
    const {id} = useParams();
    const videoContext = (counterData.videos.filter((video)=>video.id === id));

    const {video, descripcion, titulo} = videoContext[0];
    
    const videoId = video.match(/v=([^&]+)/)[1];
    console.log(videoContext[0]);

    //estilos
    const DivStyled = styled.div`
        margin: 4rem 0;
    `

    const H1styled = styled.h1`
        margin-top: 0;
        margin-bottom: 2rem;
    `

    const IframeStyled= styled.iframe`
        width: 90%;
        height: 20rem;
        @media (min-width: 768px) {
            width: unset;
            width: 56rem;
            height: 31.5rem;

        }
    `
    const TextoStyled = styled.p`
        font-size: 1.7rem;
        line-height: 1.4;
        margin: 1.5rem auto 0 auto;
        
        @media (min-width: 1024px) {
            width: 60%;
            
        }

    `


    return(
        <Container maxWidth='xl' sx={{textAlign: 'center'}}>
            <DivStyled>

                <H1styled>{titulo}</H1styled>
                <IframeStyled 
                    width="560" 
                    height="315" 
                    src={`https://www.youtube.com/embed/${videoId}`}
                
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                ></IframeStyled>

                <TextoStyled>{descripcion}</TextoStyled>
            </DivStyled>


        </Container>
    )
}

export default Post;