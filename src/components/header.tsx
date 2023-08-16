import Menu from "./menu";
// import Logo from "/src/assets/Logo.svg";
import Logo from "/src/assets/Logomenu2.svg";
import { useState } from 'react';

const header = () => {
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="main-header">
        <div className="main-logo">
          <a href="/">
            <img src={Logo} alt="Logo de Idiomas en Señas" />
          </a>
        </div>

        {/* Menu Hamburguesa */}
        <div
          className={`main-menu-toggle ${isMenuOpen ? 'show' : ''}`}
          onClick={handleMenuToggle}
        ></div>
        {/* Componente del menu */}
        <Menu isMenuOpen={isMenuOpen} />
      </header>
    </>
  );
};

export default header;
