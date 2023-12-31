import Courses from "./Courses"
import {courses, coursesDeaf, coursesSpecial} from "../components/CoursesData"

const NewServices = () => {
  return (
    <>
    <div className="New-services-section" id="cursos">
        <h2>Cursos</h2>
        <p>Através de la plataforma digital educativa <strong>Idiomas en señas</strong> ofrecemos cursos de la Lengua de Señas para personas sordas tanto oyentes. </p>
            <div className="New-services-container">
                <div className="new-services-item">
                    <h3>Para personas sordas</h3>
                    <Courses courses={coursesDeaf}/>
                </div>
                <div className="new-services-item">
                    <h3>Para personas Oyentes</h3>
                    <Courses courses={courses} />
                </div>
            </div>
        <div className="services-special-item">
            <Courses courses={coursesSpecial} />
        </div>
    </div>
    </>
  )
}

export default NewServices