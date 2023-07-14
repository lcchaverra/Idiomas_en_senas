import ActivityImg1 from "/src/assets/9.jpg";
import ActivityImg2 from "/src/assets/2.jpg";
import ActivityImg3 from "/src/assets/3.jpg";
import ActivityImg4 from "/src/assets/4.jpg";
import ActivityImg5 from "/src/assets/5.jpg";

const Activities = () => {
  return (
    <>
      <div className="activities-container" id="activities">
        <h3>Actividades</h3>
        Hemos realizado nuestro primer Taller en Señas con personas tanto sordas como oyentes por medio del cuál aprendieron como es su nombre en la Lengua de Señas y el Abcdario por medio de juegos y actividades didácticas con el apoyo de @fondoaccion @robotica_choco por medio del programa #InnovationGirlsenAcción.
        <div className="activities-content-container">
          <div className="activities-item">
            <div className="activitie-decoration">
              {" "}
              <span className="activitie-line">0</span>1
            </div>
            <img src={ActivityImg1} alt="Imagen de actividad numero 1" />
            <div className="activitie-text-container">
              <h4>Actividad 1</h4>
              <p>
              Crear oportunidades para generar inclusión es la herramienta principal para aportarle al crecimiento y desarrollo de nuestros territorios.
              </p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activitie-decoration">
              {" "}
              <span className="activitie-line">0</span>2
            </div>
            <img src={ActivityImg2} alt="Imagen de actividad numero 2" />
            <div className="activitie-text-container">
              <h4>Actividad 2</h4>
              <p>
              nuestro objetivo es mitigar todas estas brechas y fomentar procesos de enseñanza-aprendizaje.
              </p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activitie-decoration">
              {" "}
              <span className="activitie-line">0</span>3
            </div>
            <img src={ActivityImg3} alt="Imagen de actividad numero 3" />
            <div className="activitie-text-container">
              <h4>Actividad 3</h4>
              <p>
              Idiomas en señas es un emprendimiento social que va a democratizar la lengua de señas en Colombia, nace de diversas problemáticas que se han venido presentando como la exclusión social, educativa y laboral de la población sorda
              </p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activitie-decoration">
              {" "}
              <span className="activitie-line">0</span>4
            </div>
            <img src={ActivityImg4} alt="Imagen de actividad numero 4" />
            <div className="activitie-text-container">
              <h4>Actividad 4</h4>
              <p>
              Vamos avanzando para cerrar brechas, crear equidad e inclusión social, educativa y laboral.
              </p>
            </div>
          </div>
          <div className="activities-item">
            <div className="activitie-decoration">
              {" "}
              <span className="activitie-line"></span>5
            </div>
            <img src={ActivityImg5} alt="Imagen de actividad numero 5" />
            <div className="activitie-text-container">
              <h4>Actividad 5</h4>
              <p>
              Idiomas en Señas es inclusión, es educación y es Innovación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activities;
