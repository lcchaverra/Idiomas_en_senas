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
        <h3>¿Qué idiomas te interesa aprender en la lengua de señas?</h3>
        <div className="interest-grid-container">
          <Select
            className="interest-select"
            value={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <div className="interest-note">
            <p>
              La subscripción por persona da la posibilidad de acceder a alguien
              con escasos recursos que lo necesite.
            </p>
            <q>Educate a ti y a alguien que lo necesite</q>
          </div>
        </div>
        <button className="btn" onClick={voteHandle}>
          Votar
        </button>
        <p>El objetivo es ampliar cupos en la lengua de señas en otros idiomas</p>
      </div>
    </>
  );
};

export default Interests;
