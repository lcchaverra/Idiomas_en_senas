import Service from "./Service";
import Icon1 from "/src/assets/icons/anuncio1.png";
import Icon2 from "/src/assets/icons/bandera.png";
import Icon3 from "/src/assets/icons/bulbo.png";

const servicios = [
  {
    enlace: Icon1,
    alt: "Servicio  1",
    servicio: "Aportamos",
    descripcion: "Procesos realmente enriquecedores que le aportaron mucho a nuestro crecimiento para generar inclusión educativa, social y laboral.",
  },
  {
    enlace: Icon2,
    alt: "Servicio numero 2",
    servicio: "Somos",
    descripcion: "Idiomas en Señas es inclusión, es educación y es Innovación.",
  },
  {
    enlace: Icon3,
    alt: "Servicio numero 3",
    servicio: "Nos visionamos",
    descripcion: "Somos una comunidad interesada en aprender y promocionar la lengua de señas en Colombia por medio de una plataforma digital educativa con cursos interactivos.",
  },
];

const ServiceStrip = () => {
  return (
    <>
      <div className="Services-Container">
        {servicios.map((servicio) => (
          <Service
            enlace={servicio.enlace}
            alt={servicio.alt}
            servicio={servicio.servicio}
            descripcion={servicio.descripcion}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceStrip;
