import BannerIMG from "/src/assets/12.jpg";
import BackIMG from "/src/assets/Recurso.png";
import BackOrangeBlue from "/src/assets/Recurso_imagen.png";

const MainBanner = () => {
  return (
    <>
      <div className="Banner" id="ini">
        <div className="Banner-content">
          <div className="Banner-Primary-content">
            <h3>HOLA SOY UN TITULO DE PRUEBA</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reiciendis aut obcaecati, quis, pariatur eos rem optio mollitia
              incidunt laudantium sunt porro aspernatur ex quos laborum fugit
              molestias quo saepe reprehenderit.
            </p>
            <div className="button-groud">
              <button className="btn">Botón 1</button>
              <button className="btn secundary">Botón 2</button>
            </div>
          </div>
          <div className="image-container">
            {/* <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia enim nisi deserunt autem obcaecati repellendus quaerat expedita, minus repellat labore aut! A eos ullam distinctio facere itaque dignissimos consectetur molestias.
            </p> */}
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
