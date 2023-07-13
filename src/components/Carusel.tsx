import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Foto1 from "/src/assets/1.jpg";
import Foto2 from "/src/assets/2.jpg";
import Foto3 from "/src/assets/3.jpg";
import Foto4 from "/src/assets/4.jpg";
import Foto5 from "/src/assets/5.jpg";
import Foto6 from "/src/assets/6.jpg";
import Foto7 from "/src/assets/7.jpg";
import Foto8 from "/src/assets/8.jpg";
import Foto9 from "/src/assets/9.jpg";
import Foto10 from "/src/assets/10.jpg";
import Foto11 from "/src/assets/11.jpg";
import Foto12 from "/src/assets/12.jpg";

const Carusel = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel>
        <div className="slide">
          <img src={Foto1} alt="Foto del carrusel numero 1" />
        </div>
        <div className="slide">
          <img src={Foto2} alt="Foto del carrusel numero 2" />
        </div>
        <div className="slide">
          <img src={Foto3} alt="Foto del carrusel numero 3" />
        </div>
        <div className="slide">
          <img src={Foto4} alt="Foto del carrusel numero 4" />
        </div>
        <div className="slide">
          <img src={Foto5} alt="Foto del carrusel numero 5" />
        </div>
        <div className="slide">
          <img src={Foto6} alt="Foto del carrusel numero 6" />
        </div>
        <div className="slide">
          <img src={Foto7} alt="Foto del carrusel numero 7" />
        </div>
        <div className="slide">
          <img src={Foto8} alt="Foto del carrusel numero 8" />
        </div>
        <div className="slide">
          <img src={Foto9} alt="Foto del carrusel numero 9" />
        </div>
        <div className="slide">
          <img src={Foto10} alt="Foto del carrusel numero 10" />
        </div>
        <div className="slide">
          <img src={Foto11} alt="Foto del carrusel numero 11" />
        </div>
        <div className="slide">
          <img src={Foto12} alt="Foto del carrusel numero 12" />
        </div>
      </Carousel>
    </div>
  );
};

export default Carusel;
