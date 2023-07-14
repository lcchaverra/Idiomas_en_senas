import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
    <div className="social-media">
      <a href="https://web.facebook.com/Idiomasensenas?mibextid=ZbWKwL&_rdc=1&_rdr" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/idiomas_en_senas/?igshid=ZDc4ODBmNjlmNQ" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      {/* <a href="https://www.twitter.com/tu_pagina" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.youtube.com/tu_canal" target="_blank" rel="noopener noreferrer">
        <FaYoutube />
      </a>
      <a href="https://www.linkedin.com/tu_perfil" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a> */}
    </div>
    <div className="created-by">
      <p>Desarrollado por Luis Carlos Chaverra Córdoba</p>
    </div>
    <div className="inspiring-message">
      <p>"Hablando con los hechos, construyendo una causa ♡"</p>
    </div>
    <div className="contact-info">
      <p>Contacto: lucas.cordoba1510@gmail.com</p>
    </div>
  </footer>
  )
}

export default Footer
