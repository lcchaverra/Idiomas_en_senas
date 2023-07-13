const Service = (props: any) => {
  return (
    <>
      <div className="service-item" id="services">
        <img src={props.enlace} alt={props.alt} />
        <div className="service-item-content">
          <h4>{props.servicio}</h4>
          <p>{props.descripcion}</p>
        </div>
      </div>
    </>
  );
};

export default Service;
