import Giftest from "../assets/gif/señas1.gif";

const MultiuserPackages = () => {
  return (
    <>
      <div className="packages-container">
        <h2>Paquetes Multiusuarios</h2>
        <div className="packages-grid">
          <div className="packages-users">
            <h3> Cursos para Instituciones Educativas y Programas </h3>
            <div className="packages-gif-container">
              <img
                src={Giftest}
                alt="Gif indicativo para los paquetes multiusuarios"
              />
            </div>
            <div className="packages-user-content">
              <h3> Beneficio </h3>
              <ul>
                <div className="cloud-item">
                  <li>
                    Puedes acceder a los cursos 24/7 en cualquier hora y momento
                  </li>
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
