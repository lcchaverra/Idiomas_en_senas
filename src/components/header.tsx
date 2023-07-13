import Menu from "./menu";
import Logo from "/src/assets/Logomenu2.svg";

const header = () => {
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
          onClick={() =>
            document.getElementById("main-nav").classList.toggle("show")
          }
        ></div>
        {/* Componente del menu */}
        <Menu />
      </header>
    </>
  );
};

export default header;
