import LogoSiluet from '/src/assets/logo.svg';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection = () => {

  const formRef = useRef(null);

  useEffect(() => {
    emailjs.init("user_NbWHHoXNBSbJSJeC7s6uJ");
  }, []);

  const handleSubmit = (event:any) => {
    event.preventDefault();

    if (formRef.current) {
      emailjs.sendForm("11932238243234854645", "template_d6p2mt7", formRef.current)
        .then(function () {
          console.log("se envió");
          Swal.fire({
            icon: 'success',
            title: 'Registro Exitoso...',
            text: 'Se envió correctamente su formulario, nos pondremos en contacto',
            showConfirmButton: true,
          });
        })
        .catch(function (error) {
          console.log("no se envió");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se pudo enviar el formulario, por favor inténtelo de nuevo',
            showConfirmButton: true,
          });
        });
    }
  };

  return (
    <>
      <div className="contact-container" id="contact">
        <h3>¡Contactanos!</h3>
        <p>
          Desde este formulario nos puedes contactar via correo electrónico
          (Gmail)
        </p>

        <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
          <img className="contact-logo" src={LogoSiluet} alt="Logo de idiomas en señas para la sesion de contacto" />
          <div className="form-group">
            <label htmlFor="nombre_usuario">Ingresa tus nombres</label>
            <input
              type="text"
              className="form-control"
              name="nombre_usuario"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido_usuario">Ingresa tus Apellidos</label>
            <input
              type="text"
              className="form-control"
              name="apellido_usuario"
              placeholder="Your Last Name"
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
          <div className="form-group">
            <label htmlFor="telefono_usuario">Numero de Celular</label>
            <input
              type="number"
              className="form-control"
              name="telefono_usuario"
              placeholder="Phone"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nacimiento_usuario">Fecha de nacimiento</label>
            <input
              type="date"
              className="form-control"
              name="nacimiento_usuario"
              placeholder="Born Date"
            />
          </div>
          <div className="form-group">
            <label htmlFor="nivel_usuario">Nivel Escolar</label>
            <select name="nivel_usuario" id="nivel_usuario">
              <option value="Ninguno">Ninguno</option>
              <option value="Prmaria">Prmaria</option>
              <option value="Segundaria">Segundaria</option>
              <option value="Pregrado">Pregrado</option>
              <option value="Educación en casa">Educación en casa</option>
              <option value="Edcacion Privada">Edcacion Privada</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cursoInteres_usuario">Quiero Acceder al curso:</label>
            <select name="cursoInteres_usuario" id="cursoInteres_usuario">
              <option value="Lengua de Señas Colombiana(Sordos)">Lengua de Señas Colombiana(Sordos)</option>
              <option value="Lengua de Señas Colombiana(Oyentes)">Lengua de Señas Colombiana(Oyentes)</option>
              <option value="Lengua de Señas Americana(Sordos)">Lengua de Señas Americana(Sordos)</option>
              <option value="Lengua de Señas Americana(Oyentes)">Lengua de Señas Americana(Oyentes)</option>
              <option value="Capacitación para aprender la lengua de señas (Sordos)">Capacitación para aprender la lengua de señas (Sordos)</option>
              <option value="Capacitación para aprender la lengua de señas (Oyentes)">Capacitación para aprender la lengua de señas (Oyentes)</option>
            </select>
          </div>
          <label htmlFor="Texto">¡Dejanos tu mensaje!</label>
          <div className="form-floatgrouping">
            <textarea
              placeholder="Leave a message here"
              name="Texto"
            ></textarea>
          </div>
          <br />
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

