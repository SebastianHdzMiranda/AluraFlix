import { Container } from "@mui/material";
import styled from "styled-components";
import { blanco, colorPrimario, negro, rojo } from "../components/UI/variables";
import { Btn } from "../components/UI";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { CounterContext } from "../context";
import Exito from "../components/exito/exito";

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
        left: -2px;
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
        /* padding-inline: 2.5rem; */
        width: 100%;
        height: 100%;
        background-color: transparent;
        color: ${blanco};
        /* border-radius: 10px; */
        outline: none;
        /* border: 1px solid ${blanco}; */
    }
    & .seccion--textArea{
        height: 20rem;
    }
    & .textarea{
        padding-top: 2rem;
        resize: none;
    }
    & .boton{
        position:  relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        text-align: center;
        gap: 2rem;
        @media (min-width: 768px) {
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


        /* @media (min-width: 768px) {
            margin-top: 0;
            position: absolute;
            right: 0;
        } */
    }
    & .option{
        background-color: ${negro};
        border-radius: 10px;
    }
    

`
const InputStyled = styled.input`
    background-color: #fff;
    border: none;
    border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : '#ffffff43'};
    border-radius: unset;
    transition: border-bottom .3s ease;

    &:focus{
        border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : colorPrimario};
    }
`
const SelectStyled = styled.select`
    background-color: #fff;
    border: none;
    border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : '#ffffff43'};
    border-radius: unset;
    transition: border-bottom .3s ease;

    &:focus{
        border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : colorPrimario};
    }
`
const TextAreaStyled = styled.textarea`
    background-color: #fff;
    border: none;
    border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : '#ffffff43'};
    border-radius: unset;
    transition: border-bottom .3s ease;

    &:focus{
        border-bottom: 3px solid ${(props)=> props.valid === false ? rojo : colorPrimario};
    }
`
const HelperText = styled.p`
    font-size: 1.2rem;
    position: absolute;
    bottom: -30px;
    color: ${rojo};
`

const Formulario = ()=> {
    // Context (uso de actualizarVideos y equipos(titulo))
    const counterData = useContext(CounterContext);
    const equipos = counterData.equipos.map((equipo)=>equipo.titulo);


    // useState
    const [titulo, setTitulo] = useState('');
    const [video, setVideo] = useState('');
    const [imagen, setImagen] = useState('');
    const [equipo, setEquipo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [exito, setExito] = useState(false);

    const [errors, setErrors] = useState({
        title: {
            error: null,
            mensaje: '',
        },
        linkVideo: {
            error: null,
            mensaje: '',
        },
        linkImagen: {
            error: null,
            mensaje: '',
        },
        description: {
            error: null,
            mensaje: '',
        },
    })


    // funciones
    function manejarEnvio(e) {
        e.preventDefault();
        if (errors.title.error && errors.linkVideo.error && errors.linkImagen.error && errors.description.error ) {
            const datosEnviar = {titulo, video, imagen, equipo, descripcion, id: uuidv4(),};
            counterData.actualizarVideos(datosEnviar);
            setExito(true)

        } else {
            console.log('no se creo nada');
        }

    }

    function validarTitulo(e) {
        const value = e.target.value;

        if (value.length < 3 ) {
            return(

                setErrors((prevState) => ({
                    ...prevState,
                    title: {
                        error: false,
                        mensaje: 'Deben de ser al menos 3 caracteres',
                    },
                }))

            )
        } else{
            return (

                setErrors((prevState) => ({
                    ...prevState,
                    title: {
                        error: true,
                        mensaje: '',
                    },
                }))

            )
        }
    }
    function validarVideo(e) {
        const value = e.target.value;
        const regex = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
        const resultado = regex.test(value);

        if (!resultado ) {
            return(

                setErrors((prevState) => ({
                    ...prevState,
                    linkVideo: {
                        error: false,
                        mensaje: 'Debe ser una URL de youtube',
                    },
                }))

            )
        } else{
            return (

                setErrors((prevState) => ({
                    ...prevState,
                    linkVideo: {
                        error: true,
                        mensaje: '',
                    },
                }))

            )
        }
    }
    function validarImagen(e) {
        const value = e.target.value;
        const regex = /^(http|https):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp)$/;
        const resultado = regex.test(value);

        if (!resultado ) {
            return(

                setErrors((prevState) => ({
                    ...prevState,
                    linkImagen: {
                        error: false,
                        mensaje: 'Debe ser una URL de imagen valida',
                    },
                }))

            )
        } else{
            return (

                setErrors((prevState) => ({
                    ...prevState,
                    linkImagen: {
                        error: true,
                        mensaje: '',
                    },
                }))

            )
        }
    }

    function validaDescription(e) {
        const value = e.target.value;

        if (value.length < 10 ) {
            return(

                setErrors((prevState) => ({
                    ...prevState,
                    description: {
                        error: false,
                        mensaje: 'Deben de ser al menos 10 caracteres',
                    },
                }))

            )
        } else{
            return (

                setErrors((prevState) => ({
                    ...prevState,
                    description: {
                        error: true,
                        mensaje: '',
                    },
                }))

            )
        }
    }


    return(
        <ContainerStyled maxWidth='md'>
            <H1Styled>Nuevo Video</H1Styled>
            <FormStyled onSubmit={manejarEnvio}>
                <div className="contenido">
                    <div className="seccion">
                        <label className="label" >Titulo</label>
                        <InputStyled 
                            id="titulo" 
                            className="input" 
                            type="text" 
                            placeholder="Digite el titulo" 
                            value={titulo}
                            valid={errors.title.error}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setTitulo(value);
                            }}
                            onBlur={validarTitulo}
                        />
                        {errors.title.error === false && <HelperText>{errors.title.mensaje}</HelperText>}

                    </div>
                    <div className="seccion">
                        <label className="label" >Link del video</label>
                        <InputStyled 
                            id="link" 
                            className="input" 
                            type="text" 
                            placeholder="Digite el link del video" 
                            value={video}
                            valid={errors.linkVideo.error}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setVideo(value);
                            }}
                            onBlur={validarVideo}
                        />
                        {errors.linkVideo.error === false && <HelperText>{errors.linkVideo.mensaje}</HelperText>}
                    </div>
                    <div className="seccion">
                        <label className="label" >Link de la imagen del video</label>
                        <InputStyled 
                            id="imagen" 
                            className="input" 
                            type="text" 
                            placeholder="Digite el link de la imagen" 
                            value={imagen}
                            valid={errors.linkImagen.error}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setImagen(value);
                            }}
                            onBlur={validarImagen}
                        />
                        {errors.linkImagen.error === false && <HelperText>{errors.linkImagen.mensaje}</HelperText>}
                    </div>
                    <div className='seccion'>
                        <label className="label" htmlFor="equipos">Equipos</label>
                        <SelectStyled required id="equipos" className="input" value={equipo} onChange={(e)=> setEquipo(e.target.value)}>  


                            <option disabled hidden value=''>Seleccionar epoca</option>

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


                        </SelectStyled>
                    </div>

                    <div className="seccion seccion--textArea">
                        <label className="label">Descripción</label>
                        <TextAreaStyled 
                            name="descricion" 
                            className="textarea" 
                            id="descripcion" 
                            placeholder="Escribe una descripción general"
                            value={descripcion}
                            valid={errors.description.error}
                            onChange={(e)=>{
                                const value = e.target.value;
                                setDescripcion(value);
                            }}
                            onBlur={validaDescription}
                        >
                            
                        </TextAreaStyled>
                        {errors.description.error === false && <HelperText>{errors.description.mensaje}</HelperText>}
                    </div>

                    <div className="boton">
                        {/* <Btn className="" >Guardar</Btn>
                        <Btn className="limpiar" >Limpiar</Btn> */}
                        <input className="submit" type="submit" value="Enviar" />
                    </div>
                </div>
            </FormStyled>

            
            {exito && <Exito /> }

        </ContainerStyled>
    )
}

export default Formulario;