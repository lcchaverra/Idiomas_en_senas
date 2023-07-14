import Carusel from "./Carusel";
import BackIMG1 from "/src/assets/decoracion1.png";
import BackIMG2 from "/src/assets/decoracion2.png";

const ImageSections = () => {
  return (
    <>
      <div className="gallery-container" id="gallery">
        <h3 className="">Galeria de Imagenes</h3>
        <p>
          Estos son los rostros de personas sordas y oyentes que anhelan
          oportunidades, anhelan inclusión y quieren aprender a comunicarse en
          la Lengua de Señas. Idiomas en Señas es la catapulta para que puedan
          aprender a comunicarse en su propia lengua nativa, aportar al
          crecimiento y desarrollo de su comunidad, departamento y el mundo. Mi
          Taller en Señas fue un espacio en el que pudieron expresar sus
          pensamientos y su más profundo sentir.
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
