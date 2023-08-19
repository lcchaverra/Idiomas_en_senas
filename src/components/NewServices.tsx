import Courses from "./Courses"
import GitTest from '../assets/gif/señas1.gif';

const courses = [
  {
    title: 'Lengua de Señas Colombiana',
    gif: GitTest,
    levels: [
      { level: 'Básico', info: 'Contenido para nivel 1' },
      { level: 'Intermedio', info: 'Contenido para nivel 2' },
      { level: 'Avanzado', info: 'Contenido para nivel 3' },
    ],
  },
  {
    title: 'Lenga de Señas Americana',
    gif: GitTest,
    levels: [
      { level: 'Básico', info: 'Contenido para nivel A' },
      { level: 'Intermedio', info: 'Contenido para nivel B' },
      { level: 'Avanzado', info: 'Contenido para nivel C' },
    ],
  },

  {
    title: 'Capacitacion para aprender la lengua de señas',
    gif: GitTest,
    levels: [
      { level: 'Básico', info: 'Contenido para nivel X' },
      { level: 'Intermedio', info: 'Contenido para nivel Y' },
      { level: 'Avanzado', info: 'Contenido para nivel Z' },
    ],
  },

];

const NewServices = () => {
  return (
    <>
    <div className="New-services-section" id="services">
        <h2>Servicios</h2>
        <p>Através de la plataforma digital educativa <strong>Idiomas en señas</strong> ofrecemos cursosla Lengua de Señas para personas sordas tanto oyentes. </p>
            <div className="New-services-container">
                <div className="new-services-item">
                    <h3>Para personas sordas</h3>
                    <Courses courses={courses}/>
                </div>
                <div className="new-services-item">
                    <h3>Para personas Oyentes</h3>
                    <Courses courses={courses} />
                </div>
            </div>
    </div>
    </>
  )
}

export default NewServices