// import { Link } from "react-router-dom";

const menu = ({mainNavRef}:any) => {

    const scrollToSection = (event:any, sectionId:any) => {
      event.preventDefault();
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <>
    <nav className="main-nav" id="main-nav">
        <ul className="main-menu">
        {/* <li className="main-menu__item"><Link to="/" className="main-menu__link">Inicio</Link></li>
            <li className="main-menu__item"><Link to="/contact" className="main-menu__link">Contacto</Link></li> */}
          <li className="main-menu__item"><a className="main-menu__link" href="#ini" onClick={(event) => scrollToSection(event, 'ini')}> Inicio </a> </li>
          <li className="main-menu__item"><a className="main-menu__link" href="#services" onClick={(event) => scrollToSection(event, 'services')}> Servicios </a> </li>
          <li className="main-menu__item"><a className="main-menu__link" href="#activities" onClick={(event) => scrollToSection(event, 'activities')}> Actividades </a> </li>
          <li className="main-menu__item"><a className="main-menu__link" href="#gallery" onClick={(event) => scrollToSection(event, 'gallery')}> Galeria </a> </li>
          <li className="main-menu__item"><a className="main-menu__link" href="#contact" onClick={(event) => scrollToSection(event, 'contact')}> Contactanos </a> </li>
        </ul>
    </nav>
    </>
  )
}

export default menu