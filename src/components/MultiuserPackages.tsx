import Giftest from "../assets/gif/señas1.gif";
import CloudImg from "../assets/icons/nube.png";

const MultiuserPackages = () => {
  return (
    <>
      <div className="packages-container">
        <h2>Paquetes Multiusuarios</h2>
        <div className="packages-grid">
          <div className="packages-users">
            <h3> Cursos para Instituciones Educativas </h3>
            <div className="packages-gif-container">
              <img
                src={Giftest}
                alt="Gif indicativo para los paquetes multiusuarios"
              />
            </div>
            <div className="packages-user-content">
              <h4> Beneficio </h4>
              <ul>
                <div className="cloud-item">
                  <li>
                    Puedes acceder a los cursos 24/7 en cualquier hora y momento
                  </li>
                  {/* <img src={CloudImg} alt="Nube de fondo para los beneficios" /> */}
                </div>
                <div className="cloud-item">
                  <li>
                    Puedes practicar y jugar con contenido interactivo de
                    aceurdo a tu curiosidad
                  </li>
                </div>
                <div className="cloud-item">
                  <li>
                    Puedes interactuar con personas subscritas en cursos para
                    practicar lo aprendido desde cualquier parte del mundo
                  </li>
                </div>
              </ul>
            </div>
          </div>
          <div className="packages-users">
            <h3> Cursos para Programas </h3>

            <div className="packages-gif-container">
              <img
                src={Giftest}
                alt="Gif indicativo para los paquetes multiusuarios"
              />
            </div>
            <div className="packages-user-content">
              <h4> Beneficio </h4>

              <ul>
                <div className="cloud-item">
                  <li>
                    Puedes acceder a los cursos 24/7 en cualquier hora y momento
                  </li>
                  {/* <img src={CloudImg} alt="Nube de fondo para los beneficios" /> */}
                </div>
                <div className="cloud-item">
                  <li>
                    Puedes practicar y jugar con contenido interactivo de
                    aceurdo a tu curiosidad
                  </li>
                </div>
                <div className="cloud-item">
                  <li>
                    Puedes interactuar con personas subscritas en cursos para
                    practicar lo aprendido desde cualquier parte del mundo
                  </li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiuserPackages;
