import MisionIMG from '../assets/icons/proposito.png'
import VisionIMG from '../assets/icons/vision.png'
import BackIMG from "/src/assets/Recurso.png";

const MainPresentationText = () => {
  return (
    <>
    <div className="who-we-are">
        <h2>Quienes Somos</h2>
        <p>Idiomas en señas es educación, es inclusión y es innovación. Somos una comunidad interesada en aprender y promocionar la lengua de señas en Colombia, por medio de cursos interactivos para aprender diferentes idiomas en la lengua de señas, que se conecta a través de una plataforma educativa digital para personas SORDAS Y OYENTES
        </p>
        <div className="mision-vision-container">
            <div className="mision">
                <div className='mision-vision-title'>
                <img src={MisionIMG} alt="Logo de la Mision" />
                <h3>
                    Misión
                </h3>

                </div>
                <p>
                    Democratizar la Lengua de Señas para que se vuelva tendencia nacional e internacional. Cerrar brechas, crear equidad e inclusión social, educativa y Laboral para la comunidad Sorda.
                </p>
            </div>
            <div className="vision">
            <div className='mision-vision-title'>
                <img src={VisionIMG} alt="Logo de la Vision" />
                <h3>
                    Visión
                </h3>
            </div>
                <p>
                Generar un movimiento en donde la inclusión de la comunidad sorda no dependa solo de ella sino de todos y se pueda comunicar con personas tanto sordas como oyentes por medio de la plataforma digital educativa idiomas en señas con contenido interactivos además de fomentar procesos de enseñanza aprendizaje de la lengua de señas en instituciones educativas y programas para personas sordas y oyentes
                </p>
            </div>
        </div>
        <div className="Banner-backgroud">
          <img className="" src={BackIMG} alt="Imagen de Fondo del Baner" />
        </div>
    </div>
    </>
  )
}

export default MainPresentationText