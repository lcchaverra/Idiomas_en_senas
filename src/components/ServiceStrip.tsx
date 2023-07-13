import Service from "./Service";
import Icon1 from "/src/assets/icons/anuncio1.png";
import Icon2 from "/src/assets/icons/bandera.png";
import Icon3 from "/src/assets/icons/bulbo.png";

const servicios = [
  {
    enlace: Icon1,
    alt: "Servicio numero 1",
    servicio: "Servicio 1",
    descripcion: "aqui va la descripcion",
  },
  {
    enlace: Icon2,
    alt: "Servicio numero 2",
    servicio: "Servicio 2",
    descripcion: "aqui va la descripcion #2",
  },
  {
    enlace: Icon3,
    alt: "Servicio numero 3",
    servicio: "Servicio 3",
    descripcion: "aqui va la descripcion #3",
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
