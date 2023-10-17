import BannerIMG from "/src/assets/12.jpg";
import BackIMG from "/src/assets/Recurso.png";
import BackOrangeBlue from "/src/assets/Recurso_imagen.png";

const MainBanner = () => {
  return (
    <>
      <div className="Banner">
        <div className="Banner-content">
          <div className="Banner-Primary-content">
            <h3>Idiomas en Señas</h3>
            <p>
            Somos una comunidad interesada en aprender y promocionar la Lengua de señas en Colombia, que se conecta a través de una plataforma digital.
            </p>
            <div className="button-groud">
              <button className="btn">¡Unetenos!</button>
              <button className="btn secundary">Contactanos</button>
            </div>
          </div>
          <div className="image-container">
            <img
              src={BannerIMG}
              alt="Imagen de baner de presentacion de Idiomas en Señas"
            />
            <img
              className="Back-Item"
              src={BackOrangeBlue}
              alt="Imagen de fondo para la imagen del baner de presentacion de idiomas en señas"
            />
          </div>
        </div>
        {/* Imagenes de Fondo */}
        <div className="Banner-backgroud">
          <img className="" src={BackIMG} alt="Imagen de Fondo del Baner" />
        </div>
      </div>
    </>
  );
};

export default MainBanner;
