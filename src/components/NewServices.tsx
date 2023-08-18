import Courses from "./Courses"

const NewServices = () => {
  return (
    <>
    <div className="New-services-section">
        <h2>Servicios</h2>
        <p>Através de la plataforma digital educativa <strong>Idiomas en señas</strong> ofrecemos cursosla Lengua de Señas para personas sordas tanto oyentes. </p>
            <div className="New-services-container">
                <div className="new-services-item">
                    <h3>Para personas sordas</h3>
                    <Courses />
                </div>
                <div className="new-services-item">
                    <h3>Para personas Oyentes</h3>
                    <Courses />
                </div>
            </div>
    </div>
    </>
  )
}

export default NewServices