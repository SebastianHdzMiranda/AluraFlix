import React, {createContext, useState, useEffect} from "react";
import { v4 as uuidv4 } from "uuid";


// 
export const CounterContext = createContext();

// 
export const CounterProvider = ({ children }) => {
    // localStorage variables
    const videosStorage = JSON.parse(localStorage.getItem('videos'));

    // useState
    const [equipos, setEquipos] = useState([
        {id: uuidv4(), titulo: '60s', color: '#9CD33B', info: 'Formación Back End de Alura Latam'},
        {id: uuidv4(), titulo: '70s', color: '#FFBA05', info: 'Formación Innovación y Gestión de Alura Latam'},
        {id: uuidv4(), titulo: '80s', color: '#6B5BE2', info: 'Formación UX'},
        {id: uuidv4(), titulo: '90s', color: '#6B5BE2', info: 'Formación UX'},
        {id: uuidv4(), titulo: '2000s', color: '#6B5BE2', info: 'Formación UX'},
    ]);
    const [videos, setVideos] = useState([
        {
            titulo: 'House of cards',
            imagen: 'https://i.ytimg.com/vi/8nTFjVm9sTQ/maxresdefault.jpg',
            equipo: "2000s",
            video: "https://www.youtube.com/watch?v=8nTFjVm9sTQ&ab_channel=Radiohead",
            id: uuidv4(),
            descripcion: '«House of Cards» es una canción nominada al Grammy del grupo británico de rock alternativo Radiohead y es el octavo tema de su séptimo disco de estudio In Rainbows lanzado en 2007. El tema fue lanzado junto a Bodysnatchers como un sencillo promocional y como video de In Rainbows en junio de 2008',  
        },
        {
            titulo: 'Runaway',
            video: "https://www.youtube.com/watch?v=Bm5iA4Zupek&ab_channel=KanyeWestVEVO",
            imagen: 'https://www.rap-up.com/wp-content/uploads/2022/04/kanye-runaway-cover-1280x720.jpg',
            equipo: "2000s",
            descripcion: 'El vídeo de «Runaway» es un cortometraje de más de treinta y cuatro minutos de duración, el cual es el segundo vídeo musical más largo de la Historia, sólo superado por Michael Jackson en 1997 con «Ghosts» de casi cuarenta minutos de duración. La pieza, cuyo guion fue escrito por Hype Williams basándose en una idea de Kanye West, tuvo como protagonista a la modelo Selita Ebanks. Las imágenes fueron grabadas en Praga, República Checa, en agosto de 2010.',  
            id: uuidv4(),
        },
        {
            titulo: 'The real Slim Shady',
            video: "https://www.youtube.com/watch?v=eJO5HU_7_1w",
            imagen: 'https://www.detroitnews.com/gcdn/presto/2022/06/28/PDTN/091de425-95d3-4875-8ece-00b494d96d83-Real_Slim_Shady.jpg',
            equipo: "2000s",
            descripcion: '¿Qué ocurrió con Eminem? ¿Es que en el 2000 todavía nunca nadie había visto un blanco con un micrófono? ¿Y los Beastie Boys? ¿Y House of Pain? Sin embargo, no se puede negar que, aparte de su carácter gamberro irritante a ratos, Eminem tenía mucha gracia rapeando. Este fue el sencillo de presentación de su supuesta obra maestra The Marshall Mathers LP, producido por Dr. Dre y con beefs incluidos a Will Smith, Britney Spears y Christina Aguilera. The real Slim Shady era un hit en toda regla, sí, pero aún fue más divertida la crítica en forma de parodia que le dedicó Emily Ellis desde la perspectiva de Christina Aguilera: "So wont the real Slim Shady please shut up, please shut up?"',  
            id: uuidv4(),
        },
        {
            titulo: 'Last Nite',
            video: "https://www.youtube.com/watch?v=TOypSnKFHrE",
            imagen: 'https://monterreyrock.com/wp-content/uploads/2015/12/last-night-the-strokes-casablanca.jpg',
            equipo: "2000s",
            descripcion: '¿Quién habría dicho que el siglo XXI tecnológico y futurista nos traería un regreso al rock n roll de guitarras más básico y más garajero? Cinco chavales ricos y apuestos de Nueva York, que se habían conocido en escuelas privadas, consiguieron hacer magia con los elementos más básicos. Is this it?, su álbum de debut, contenía suficientes hits para catapultarlos al mainstream y hacer que, durante un tiempo, la gente volviera a bailar con riffs de guitarras distorsionadas, sencillos y terriblemente efectivos. De estos hits, Last nite es probablemente el más icónico. Todavía lo bailamos.',  
            id: uuidv4(),
        },
        {
            titulo: 'Yellow',
            video: "https://www.youtube.com/watch?v=yKNxeF4KMsY",
            imagen: 'https://i.scdn.co/image/ab67616d0000b2733d92b2ad5af9fbc8637425f0',
            equipo: "2000s",
            descripcion: "Puede que ahora Coldplay nos parezcan un grupo demasiado comercial y rimbombante, pero en julio del año 2000, la irrupción de 'Parachutes', su primer álbum, supuso una bocanada de aire fresco en el panorama del pop independiente. Lo precedieron los singles 'Shiver' y 'Yellow', este medio tiempo meloso que todavía hoy sigue funcionando a las mil maravillas con toda su desnudez y sencillez. Ojalá los de Chris Martin se hubieran mantenido fieles a su sonido original. ",  
            id: uuidv4(),
        },
        {
            titulo: 'I bet you look good on the dancefloor',
            video: "https://www.youtube.com/watch?v=CYpn8yUnX_c",
            imagen: 'https://images.genius.com/779b9b4221140a2ffc0b7bc68bb291fd.600x600x1.jpg',
            equipo: "2000s",
            descripcion: "Arctic Monkeys interpretó la canción en la ceremonia de apertura de los Juegos Olímpicos de Verano de 2012 . La canción ocupó el puesto número 7 en la lista de NME de Las 500 mejores canciones de todos los tiempos. Mike Smith , quien los contrató para EMI Publishing , afirmó que con el lanzamiento de esta canción, Arctic Monkeys creó un modelo que es absolutamente dominante hoy en día. El hecho de que hagas clic en la música para escucharla como lo hacías con ellos, anunció en lo que hemos venido a vivir ahora.",  
            id: uuidv4(),
        },
        {
            titulo: 'Fresh',
            video: "https://www.youtube.com/watch?v=6TOXw9zQCAc",
            imagen: 'https://i.ytimg.com/vi/6TOXw9zQCAc/maxresdefault.jpg',
            equipo: "90s",
            descripcion: "Fresh es el sexto tema de Daft Punk del álbum Homework. El video musical muestra a Charles filmando una escena para una película, cuando termina, habla sobre técnicas con el director (interpretado por Spike Jonze ), luego va con Beatrice; su novia. Deciden cenar en un restaurante y luego se marchan en un coche rojo, mientras se apaga el atardecer.",  
            id: uuidv4(),
        },
        {
            titulo: 'Smells like teen spirit',
            video: "https://www.youtube.com/watch?v=hTWKbfoikeg",
            imagen: 'https://consequence.net/wp-content/uploads/2021/06/Nirvana-Smells-Like-Teen-Spirit.jpg?resize=1031,580',
            equipo: "90s",
            descripcion: "Si en 1991 tenías 15 o 16 años, es posible que vivieras la salida de 'Smells like teen spirit' como una auténtica revelación. Puede que Nirvana no inventaran absolutamente nada, pero sintetizaban a la perfección el indie, el punk y el rock alternativo de los 80 y lo catapultaban al 'mainstream' con una furia inusitada. Por un breve periodo de tiempo, 'Smells like teen spirit' representó el asalto del underground al poder de la MTV y las grandes compañías de discos, abriendo camino a todo lo que estaba por llegar (bueno y malo) en la década de los 90.",  
            id: uuidv4(),
        },
        {
            titulo: 'One',
            video: "https://www.youtube.com/watch?v=ftjEcrrf7r0&ab_channel=U2VEVO",
            imagen: 'https://m.media-amazon.com/images/M/MV5BODJhNzIwOWYtNzBjNS00OWRlLTg2ZDUtNGE0NmQ5MzI5NjM2XkEyXkFqcGdeQXVyNTk1NTMyNzM@._V1_.jpg',
            equipo: "90s",
            descripcion: "En palabras del propio Bono, One resumía una visión escéptica sobre la ilusión naif de unidad y hermandad en el mundo, más allá de que con el tiempo el uso de la canción fue derivando en un sentido algo más luminoso y positivo, siendo utilizada en infinidad de eventos de caridad. Hoy en día la banda en vivo la utiliza para promocionar hechos vinculados a los derechos humanos y reafirma la posibilidad de una unidad adulta entre pueblos y naciones, destacando que para ello es necesario reconocer las diferencias por sobre la masificación.",  
            id: uuidv4(),
        },
        {
            titulo: 'Paranoid android',
            video: "https://www.youtube.com/watch?v=fHiGbolFFGw",
            imagen: 'https://i.ytimg.com/vi/fHiGbolFFGw/maxresdefault.jpg',
            equipo: "90s",
            descripcion: "Después de parecer unos 'one hit wonders' con 'Creep' y de intentar alejarse de ello con su segundo trabajo 'The bends' (1994), Radiohead dieron el salto definitivo hacia lo que son ahora con 'OK Computer '(1997) un disco que apuntaba más a los 2000 que a los 90. Y la canción insignia fue' Paranoid android ', extraña elección para un single, ya que duraba más de seis minutos y tenía varias secciones muy diferenciadas entre ellas. Sin embargo, esta pieza con aires de rock progresivo conectó a la perfección con un momento en que ya se vislumbraba la alienación que provocaban sobre la gente el capitalismo moderno y las nuevas tecnologías. Radiohead creaban belleza a partir de sentimientos de angustia y extrañeza mientras se consagraban como uno de los grandes grupos de rock de la historia.",  
            id: uuidv4(),
        },
        {
            titulo: 'Chan Chan',
            video: "https://www.youtube.com/watch?v=tGbRZ73NvlY",
            imagen: 'https://i.ytimg.com/vi/o5cELP06Mik/maxresdefault.jpg',
            equipo: "90s",
            descripcion: "A finales de los 90 irrumpió con fuerza el son cubano gracias a la publicación de 'Buena Vista Social Club', un disco producido por Ry Cooder que significó el renacimiento de una serie de artistas ya veteranos que habían caído en el olvido después de la revolución. Gracias al álbum y al documental de Wim Wenders el público de finales de los 90 descubrió nombres como Compay Segundo, Omara Portuondo, Eliades Ochoa e Ibrahim Ferrer. Canciones como 'Chan chan' despiertan una delicada nostalgia a la vez que evidencian el anglocentrismo de una época en la que nadie hubiera podido imaginar un boom latino como el actual.",  
            id: uuidv4(),
        },
        {
            titulo: 'Puente',
            video: "https://www.youtube.com/watch?v=eAO7CEcCD3s&ab_channel=GustavoCeratiVEVO",
            imagen: 'https://tn.com.ar/resizer/MejWlMTp0ugqNF2JfSSkm1gb7e4=/1440x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/GSHRNWO4A5JA35EOT4HGBHUJPU.jpg',
            equipo: "90s",
            descripcion: "La revista Rolling Stone y la cadena MTV la ubicaron en el puesto número 59 de las mejores canciones de la historia del rock argentino. La canción fue interpretada en vivo entre 1999 y 2010, desde la gira Bocanada hasta Fuerza Natural. La canción comienza en forma climática, con toques psicodélicos. Sin embargo, Cerati rompe de golpe la pasividad del tema en el estribillo, en donde la canción tiene un vuelco total en todo sentido, tanto rítmico como sonoro, hacia un estilo mucho más roquero y crudo",  
            id: uuidv4(),
        },
        {
            titulo: 'Only shallow',
            video: "https://www.youtube.com/watch?v=FyYMzEplnfU",
            imagen: 'https://rockandrollglobe.com/wp-content/uploads/2021/11/Loveless-30-rnrg-splash-page--800x445.jpg',
            equipo: "90s",
            descripcion: "Es imposible hablar de los 90 sin referirse al noise pop o el shoegaze (lo de mirarse los zapatos, no por timidez sino porque es donde están los pedales de efectos). Y, desde Irlanda, My Bloody Valentine fue uno de los grupos más representativos de esta estética, si no el que más. Con 'Loveless' (1991), no solo definieron un sonido y una forma de hacer rock con cascadas de guitarras distorsionadas y el uso del sampler, sino que lograron enterrar en ese magma sublimes melodías de pop cristalino, como las que canta Bilinda Butcher en este 'Only shallow', brutalmente contrastadas por el muro sónico instrumental.",  
            id: uuidv4(),
        },
        {
            titulo: 'Glory Box',
            video: "https://www.youtube.com/watch?v=4qQyUi4zfDs",
            imagen: 'https://i.ytimg.com/vi/4qQyUi4zfDs/mqdefault.jpg',
            equipo: "90s",
            descripcion: "En la estela de Massive Attack, Portishead dieron un paso más hacia la popularización del trip hop con 'Dummy' (1994). 'Glory box', la canción que cerraba el disco y también el tercer single del álbum, era una especie de blues arrastrado basado en un 'sample' de Isaac Hayes en bucle y la hipnótica voz de Beth Gibbons encima (en el videoclip, caracterizada como una cantante de jazz de los años 50), meciéndose sobre la lenta cadencia y con el contrapunto de una guitarra distorsionada arañándole protagonismo.",  
            id: uuidv4(),
        },
        {
            titulo: "Hey Jude",
            video: "https://www.youtube.com/watch?v=A_MjCqQoLLA&ab_channel=TheBeatlesVEVO",
            imagen: "https://assets.megamediaradios.fm/sites/2/2021/03/hey-jude-the-beatles-3.jpg",
            equipo: "60s",
            descripcion: "«Hey Jude» es una canción de la banda británica de rock The Beatles, lanzada en agosto de 1968 como primer sencillo del sello discográfico de la formación, Apple Records. Acreditada a Lennon/McCartney, el tema es una balada que evolucionó a partir de «Hey Jules», canción que Paul McCartney escribió para consolar a Julian, el hijo de John Lennon, después del divorcio de sus padres.",  
            id: uuidv4(),
        },
        {
            titulo: "God Only Knows",
            video: "https://www.youtube.com/watch?v=NADx3-qRxek&ab_channel=TheBeachBoysVEVO",
            imagen: "https://exclusive.radio/wp-content/uploads/2022/05/Pet-Sounds-comp-e1652966098399.jpg",
            equipo: "60s",
            descripcion: "La canción es ampliamente señalada como una de las mejores canciones de la historia de la música popular, considerándola Paul McCartney, entre otros, como su canción favorita. Tiene la particularidad de ser una de las primeras canciones pop en las que se usa la palabra «Dios» (God) en el título. La canción representa también una novedad técnica y sofisticada en relación con la precedente producción de los Beach Boys, y de cualquier otro grupo pop de la época, en particular por su estructura melódica y por la armonización vocal de los coros. En la introducción es posible escuchar instrumentos más bien inusuales para el género, como el clavecín y el corno.",  
            id: uuidv4(),
        },
        {
            titulo: "California Dreamin'",
            video: "https://www.youtube.com/watch?v=N-aK6JnyFmk&ab_channel=FolkExperience",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/mejores-canciones-60-california-dreamin-1625765169.jpg?crop=1xw:1xh;center,top&resize=980:*",
            equipo: "60s",
            descripcion: "El grupo neoyorquino hizo inicialmente los coros en la versión original de Barry McGuire. Pero una vez que hicieron su propia interpretación, la canción fue toda suya. Este tema sobre la nostalgia de la Costa Oeste estadounidense se convirtió en uno de los más representativos de la década. Como curiosidad, sería versioneado también por José Feliciano en la cara B de su sencillo Light My Fire.",  
            id: uuidv4(),
        },
        {
            titulo: "My Generation",
            video: "https://www.youtube.com/watch?v=qN5zw04WxCc&ab_channel=TheBestOf-HomeOfClassicMusic",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/mejores-canciones-who-generation-1625765170.jpg?crop=1xw:1xh;center,top&resize=980:*",
            equipo: "60s",
            descripcion: "Pete Townshend creó magníficas canciones para The Who, pero ninguna de ellas describió mejor la angustia adolescente que esta. Además nos encanta la historia que la inspiró: resulta que la escribió en un tren, ya que supuestamente la Reina Madre había ordenado que la grúa se llevara su coche cochambroso, cuya visión le molestaba en sus paseos mañaneros.",  
            id: uuidv4(),
        },
        {
            titulo: "Good Vibrations",
            video: "https://www.youtube.com/watch?v=Eab_beh07HU&ab_channel=StephenMcElvain",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/mejores-canciones-60-beach-boys-good-vibrations-1625765170.jpg?crop=1xw:1xh;center,top&resize=980:*",
            equipo: "60s",
            descripcion: "La presión por superar al magnífico disco Pet Sounds y por seguir el implacable ritmo que los Beatles marcaban desde Ingleterra preparó el terreno para esta obra maestra obsesivo-compulsiva. Brian Wilson gastó miles de dólares y perdió la cordura durante el extenuante proceso de crear, pedazo a pedazo, esta sinfonía de órganos, riffs y armonías. Sin duda una de las mejores joyas de las música de todos los tiempos.",  
            id: uuidv4(),
        },
        {
            titulo: "Paint It Black",
            video: "https://www.youtube.com/watch?v=O4irXQhgMqg&ab_channel=ABKCOVEVO",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/mejores-canciones-60-paint-black-rolling-stones-1625765168.jpg?crop=1xw:1xh;center,top&resize=980:*",
            equipo: "60s",
            descripcion: "'Ya no hay colores, quiero que se vuelvan negros', dice Mick Jagger con voz nasal volcando su vacío emocional en esta canción marcada por el tremendo sitar de Brian Jones, que acompañan a la perfección el bajo de Wyman, la batería de Watts y la guitarra de Richards. Se la considera como una de las influencias de la música psicodélica que estaba por venir",  
            id: uuidv4(),
        },
        {
            titulo: "A day in the life",
            video: "https://www.youtube.com/watch?v=usNsCeOV4GM",
            imagen: "https://hips.hearstapps.com/hmg-prod/images/mejores-canciones-60-beatles-day-life-1625765170.jpg?crop=1xw:1xh;center,top&resize=980:*",
            equipo: "60s",
            descripcion: "Cuando pedimos a los esquirers elegir cuál es la mejor canción de The Beatles, en el número uno estuvo este precioso tema del Sgt. Pepper's Lonely Hearts Club Band, que aglutina todas las mejores virtudes de los Fab Four. La producción de George Martin revolucionó la música pop con su opulencia vanguardista, la dualidad Lennon/McCartney está mejor representada que nunca y su letra, diciendo que alguien 'se voló la cabeza en un coche', te desconcierta y te atrapa a la vez. ¿Y el final? El mejor que se ha compuesto en el siglo XX.",  
            id: uuidv4(),
        },
        {
            titulo: "Stairway to Heaven",
            video: "https://www.youtube.com/watch?v=X791IzOwt3Q&ab_channel=LedZeppelin-Topic",
            imagen: "https://media.npr.org/assets/img/2016/06/23/gettyimages-85038736_custom-555ce25d97d7101fa189e12e2ccd4027aec5bbae-s800-c85.webp",
            equipo: "60s",
            descripcion: "Está considerada por muchos como uno de los puntos culminantes de la historia del rock. Es una de las canciones más solicitadas en las emisoras de radio de los Estados Unidos, aunque no se ha publicado nunca en sencillo. El enorme éxito de la canción y la negativa de la banda a editar esta canción en sencillo ha podido contribuir a que Led Zeppelin IV sea uno de los álbumes más vendidos de la historia. No está enteramente claro si el título de la canción está inspirado en el título de una película. En las famosas revistas Guitar World y Rolling Stone, el solo de guitarra en La menor creado por Jimmy Page para esta canción fue elegido como el mejor de la historia, también la marca de instrumentos Gibson colocó este como el mejor en su lista de Los Mejores 50 solos de la historia",  
            id: uuidv4(),
        },
    ]) 

    // useEffect
    useEffect(()=>{
        if (videos.length > 0) {
            localStorage.setItem('videos', JSON.stringify(videos));
        }
    }, [videos])

    // funciones
    function actualizarVideos(video) {
        setVideos([...videos, video]);
    }

    const values = {
        equipos,
        videos,
        actualizarVideos,

    }

    return(
        <CounterContext.Provider value={values}>{children}</CounterContext.Provider>
    )
}