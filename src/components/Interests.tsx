import React, { useState, useEffect } from "react";
import Select from "react-select";
import MexicoFlag from "../assets/icons/flag.png";
import ArgentinaFlag from "../assets/icons/argentina.png";
import FranceFlag from "../assets/icons/france.png";
import toast, { Toaster } from "react-hot-toast";

interface Option {
  value: string;
  label: React.ReactNode;
}

const options: Option[] = [
  {
    value: "Lengua de Señas Francesas",
    label: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={FranceFlag} alt="France Flag" style={{ width: "1.3rem",marginRight: "8px" }} />
        Lengua de Señas Francesas
      </div>
    ),
  },
  {
    value: "Lengua de Señas Mexicana",
    label: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={MexicoFlag} alt="Mexico Flag" style={{ width: "1.3rem",marginRight: "8px" }} />
        Lengua de Señas Mexicana
      </div>
    ),
  },
  {
    value: "Lengua de Señas Argentina",
    label: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={ArgentinaFlag} alt="Argentina Flag" style={{ width: "1.3rem",marginRight: "8px" }} />
        Lengua de Señas Argentina
      </div>
    ),
  },
];

const Interests: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect(() => {
    const storedValue = localStorage.getItem("selectedOption");
    if (storedValue) {
      setSelectedOption(options.find(option => option.value === storedValue) || null);
    }
  }, []);

  const voteHandle = () => {
    if (selectedOption) {
      localStorage.setItem("selectedOption", selectedOption.value);
      console.log("Voto registrado:", selectedOption.value);
      toast.success("Voto Realizado");
    }
  };

  return (
    <>
      <div>
        <Toaster />
      </div>
      <div className="interest-container">
        <h3 className="interest-title">¿Quieres Aprender Más?</h3>
        <div className="interest-grid-container">
          <div className="interest-grid-item content-line">
            <h4>¿Qué idioma te interesa aprender en la lengua de señas?</h4>
            <p>Con tu voto descubriremos cuál podría ser el siguiente idioma que agregemos a nuestros cursos.</p>
            <div className="interest-select-votation-container">
            <Select
              className="interest-select"
              value={selectedOption}
              onChange={setSelectedOption}
              options={options}
            />
          <button className="btn" onClick={voteHandle}>Votar</button>
            </div>
          </div>
          <div className="interest-grid-item">
            <div className="interest-note">
              <h4>¿Sabías que...?</h4>
              <p>
                La subscripción por persona da la posibilidad de acceder a alguien
                con escasos recursos que lo necesite.
              </p>
              <span>Educate a ti y a alguien que lo necesite</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Interests;
