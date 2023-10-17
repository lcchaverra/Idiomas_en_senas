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
    </div>
    <div className="created-by">
      <p>Desarrollado por  <strong>: <a href='https://lu-dev1.netlify.app/' target='_blank'> Luis Carlos Chaverra Córdoba </a></strong> </p>
    </div>
    <div className="inspiring-message">
      <p>"Un paso mas cerca a la inclusión social"
      </p>
    </div>
    <div className="contact-info">
      <p>Contacto: lucas.cordoba1510@gmail.com</p>
    </div>
  </footer>
  )
}

export default Footer
