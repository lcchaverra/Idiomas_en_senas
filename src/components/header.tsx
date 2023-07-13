import Menu from "./menu";
import Logo from "/src/assets/Logomenu2.svg";
import { useRef } from 'react';

const header = () => {

  const mainNavRef = useRef<HTMLElement | null>(null);

  const handleMenuToggle = () => {
    if (mainNavRef.current) {
      mainNavRef.current.classList.toggle('show');
    }
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
          className="main-menu-toggle"
          onClick={handleMenuToggle}
        ></div>
        {/* Componente del menu */}
        <Menu mainNavRef={mainNavRef} />
      </header>
    </>
  );
};

export default header;
