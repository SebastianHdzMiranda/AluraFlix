import { Container } from "@mui/material";
import styled from "styled-components";
import { blanco, colorPrimario, negro } from "../components/UI/variables";
import { Btn } from "../components/UI";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";


const ContainerStyled = styled(Container)`
    padding: 5rem 0;
`

const H1Styled = styled.h1`
    text-align: center;
    margin-bottom: 3rem;
    font-weight: 300;
`

const FormStyled = styled.form`

    & .seccion{
        display: flex;
        flex-direction: column;
        margin-bottom: 5rem;
        height: 6rem;
        position: relative;
        
        &:last-of-type{
            height: 25rem;
            margin-bottom: 0;
        }
        
    }
    & .label{
        position: absolute;
        top: -10px;
        left: 20px;
        background-color: #1e1e1e;
        z-index: 1;
        padding: 0 .5rem;
    }
    & .input{
        position: absolute;
        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 1000px black inset;
            -webkit-text-fill-color: white;
        }
    }
    & .input, & .textarea{
        padding-inline: 2.5rem;
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: ${blanco};
        border-radius: 10px;
        outline: none;
        border: 1px solid ${blanco};
    }
    & .seccion--textArea{
        height: 20rem;
    }
    & .textarea{
        padding-top: 2rem;
        resize: none;
    }
    & .botones{
        position:  relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        gap: 2rem;
        @media (min-width: 768px) {
            justify-content: flex-start;
            flex-direction: row;
        }
    }
    & .limpiar{
        background-color: ${blanco};
        color: ${negro};
        font-weight: 400;
    }
    & .submit{
        padding: 1.5rem 8rem;
        margin-top: 3rem;

        cursor: pointer;
        color: ${blanco};
        border-radius: .4rem;
        background-color: ${colorPrimario};
        border: none;


        @media (min-width: 768px) {
            margin-top: 0;
            position: absolute;
            right: 0;
        }
    }
    & .option{
        background-color: ${negro};
        border-radius: 10px;
    }
    

`

const Formulario = ({equipos, videos, actualizarVideos})=> {
    // console.log(equipos, videos, actualizarVideos);
    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [imagen, setImagen] = useState('');
    const [equipo, setEquipo] = useState('');
    const [descripcion, setDescripcion] = useState('');


    // funciones
    function manejarEnvio(e) {
        e.preventDefault();
        const datosEnviar = {titulo, video, imagen, equipo, descripcion, id: uuidv4(),};
        actualizarVideos(datosEnviar);
    }


    return(
        <ContainerStyled maxWidth='md'>
            <H1Styled>Nuevo Video</H1Styled>
            <FormStyled onSubmit={manejarEnvio}>
                <div className="contenido">
                    <div className="seccion">
                        <label className="label" >Titulo</label>
                        <input 
                            id="titulo" 
                            className="input" 
                            type="text" 
                            placeholder="Digite Su el titulo" 
                            value={titulo}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setTitulo(value);
                            }}
                        />
                    </div>
                    <div className="seccion">
                        <label className="label" >Link del video</label>
                        <input 
                            id="link" 
                            className="input" 
                            type="text" 
                            placeholder="Digite el link del video" 
                            value={video}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setVideo(value);
                            }}
                        />
                    </div>
                    <div className="seccion">
                        <label className="label" >Link de la imagen del video</label>
                        <input 
                            id="imagen" 
                            className="input" 
                            required
                            type="text" 
                            placeholder="Digite el link del video" 
                            value={imagen}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setImagen(value);
                            }}
                        />
                    </div>
                    <div className='seccion'>
                        <label className="label" htmlFor="equipos">Equipos</label>
                        <select id="equipos" className="input" value={equipo} onChange={(e)=> setEquipo(e.target.value)}>  


                            <option disabled hidden value=''>Seleccionar equipo</option>

                            {equipos.map( (equipo, index)=>{
                                return (
                                    <option 
                                        key={index}
                                        value={equipo}
                                        className="option"
                                    >
                                        {equipo}
                                    </option>
                                )
                            })}


                        </select>
                    </div>

                    <div className="seccion seccion--textArea">
                        <label className="label">Descripción</label>
                        <textarea 
                            name="descricion" 
                            className="textarea" 
                            id="descripcion" 
                            placeholder="Escribe una descripción general"
                            value={descripcion}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setDescripcion(value);
                            }}
                        >
                            
                        </textarea>
                    </div>

                    <div className="botones">
                        <Btn className="" >Guardar</Btn>
                        <Btn className="limpiar" >Limpiar</Btn>
                        <input className="submit" type="submit" value="Enviar" />
                    </div>
                </div>
            </FormStyled>
        </ContainerStyled>
    )
}

export default Formulario;