import Carusel from "./Carusel";
import BackIMG1 from "/src/assets/decoracion1.png";
import BackIMG2 from "/src/assets/decoracion2.png";

const ImageSections = () => {
  return (
    <>
      <div className="gallery-container" id="gallery">
        <h3 className="">Galeria de Imagenes</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam minus
          accusamus assumenda consectetur asperiores ipsa. Ratione omnis
          blanditiis, suscipit quidem ut qui, deleniti earum delectus aliquam
          optio magnam dolore? Quaerat.
        </p>
        <Carusel />
        {/* Imagenes de Fondo */}
        <div className="gallery-backgroud-1">
          <img src={BackIMG1} alt="Imagen de Fondo de la galeria numero 1" />
        </div>
        <div className="gallery-backgroud-2">
          <img src={BackIMG2} alt="Imagen de Fondo de la galeria numero 2" />
        </div>
      </div>
    </>
  );
};

export default ImageSections;
