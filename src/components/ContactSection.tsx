import LogoSiluet from '/src/assets/logo.svg';

const ContactSection = () => {
  (function () {
    emailjs.init("user_NbWHHoXNBSbJSJeC7s6uJ");
  })();

  window.onload = function () {
    document
      .getElementById("ContactoID")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        emailjs.sendForm("11932238243234854645", "template_d6p2mt7", this).then(
          function () {
            console.log("se envió");
            Swal.fire({
              icon: 'success',
              title: 'Registro Exitoso...',
              text: 'Se envió correctamente su formulario, nos pondremos en contacto',
              showConfirmButton: true,
            })
          },
          function (error) {
            console.log("no se envió");
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'no se pudo enviar el formulario, por favor intentelo de nuevo',
                showConfirmButton: true,
            })
          }
        );
      });
  };

  return (
    <>
      <div className="contact-container" id="contact">
        <h3>¡Contactanos!</h3>
        <p>
          Desde este formulario nos puedes contactar via correo electrónico
          (Gmail)
        </p>

        <form id="ContactoID" className="contact-form">
          <img className="contact-logo" src={LogoSiluet} alt="Logo de idiomas en señas para la sesion de contacto" />
          <div className="form-group">
            <label htmlFor="nombre_usuario">Ingresa tu nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre_usuario"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email_usuario">Ingresa tu correo electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email_usuario"
              placeholder="Your Email"
            />
          </div>
          <label htmlFor="Texto">¡Dejanos tu mensaje!</label>
          <div className="form-floatgrouping">
            <textarea
              placeholder="Leave a message here"
              name="Texto"
            ></textarea>
          </div>
          <div className="form-group-btn">
            <button className="btn primary" type="submit">
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactSection;
