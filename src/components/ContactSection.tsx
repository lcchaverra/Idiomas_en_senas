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
          <div className="form-body">
          <div className="form-group">
            <label htmlFor="nombre_usuario">Nombre</label>
            <input
              type="text"
              className="form-control"
              name="nombre_usuario"
              placeholder="Ingresa tu nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="apellido_usuario">Apellido</label>
            <input
              type="text"
              className="form-control"
              name="apellido_usuario"
              placeholder="Ingresa tu Apellido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email_usuario">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email_usuario"
              placeholder="Ingresa tu correo electrónico"
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefono_usuario">Celular</label>
            <input
              type="number"
              className="form-control"
              name="telefono_usuario"
              placeholder="Numero de Celular"
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
              <option value="Prmaria">Primaria</option>
              <option value="Segundaria">Segundaria</option>
              <option value="Pregrado">Pregrado</option>
              <option value="Educación en casa">Educación en casa</option>
              <option value="Edcacion Privada">Educación Privada</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cursoInteres_usuario">Quiero Acceder al curso:</label>
            <select name="cursoInteres_usuario" id="cursoInteres_usuario">
              <option value="Lengua de Señas Colombiana">Lengua de Señas Colombiana</option>
              <option value="Lengua de Señas Americana(Sordos)">Lengua de Señas Americana(Sordos)</option>
              <option value="Lengua de Señas Americana(Oyentes)">Lengua de Señas Americana(Oyentes)</option>
              <option value="Lengua de Señas Francesa(Oyentes)">Lengua de Señas Francesa(Oyentes)</option>
              <option value="Lengua de Señas Francesa(Sordos)">Lengua de Señas Francesa(Sordos)</option>
              <option value="Capacitación para aprender la lengua de señas">Capacitación para aprender la lengua de señas</option>
            </select>
          </div>
          <div className="form-group">
          <label htmlFor="Texto">¡Dejanos tu mensaje!</label>
            <textarea
              placeholder="Dejanos un mensaje aquí"
              name="Texto"
            ></textarea>
          </div>
          <br />
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

