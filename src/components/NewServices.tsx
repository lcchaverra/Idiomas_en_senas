import Courses from "./Courses"
import GitTest from '../assets/gif/señas1.gif';

const courses = [
  {
    title: 'Curso 1',
    gif: GitTest,
    levels: [
      { level: 'Nivel 1', info: 'Contenido para nivel 1' },
      { level: 'Nivel 2', info: 'Contenido para nivel 2' },
    ],
  },
  {
    title: 'Curso 2',
    gif: GitTest,
    levels: [
      { level: 'Nivel A', info: 'Contenido para nivel A' },
      { level: 'Nivel B', info: 'Contenido para nivel B' },
      { level: 'Nivel C', info: 'Contenido para nivel C' },
    ],
  },
];

const NewServices = () => {
  return (
    <>
    <div className="New-services-section">
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