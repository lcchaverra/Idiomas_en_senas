import React, { useState, useEffect, useRef } from "react";
import Select from "react-select";
import MexicoFlag from "../assets/icons/flag.png";
import ArgentinaFlag from "../assets/icons/argentina.png";
import PortugalFlag from "../assets/icons/portugal.png";
import toast, { Toaster } from "react-hot-toast";
import WeeksVideo from "../assets/videos/semanas.mp4";
interface Option {
  value: string;
  label: React.ReactNode;
}

const options: Option[] = [
  {
    value: "Lengua de Señas Portuguesa",
    label: (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={PortugalFlag} alt="France Flag" style={{ width: "1.3rem",marginRight: "8px" }} />
        Lengua de Señas Portuguesa
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
    if (weekVideoRef.current) {
      weekVideoRef.current.playbackRate = 0.9;
    }
  }, []);

  const voteHandle = () => {
    if (selectedOption) {
      localStorage.setItem("selectedOption", selectedOption.value);
      console.log("Voto registrado:", selectedOption.value);
      toast.success("Voto Realizado");
    }
  };

  const weekVideoRef = useRef<HTMLVideoElement | null>(null)

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
            <video className="video-weeks"
            ref={weekVideoRef} 
            src={WeeksVideo}
            autoPlay 
            loop 
            muted 
            playsInline={true} 
            controls
            ></video>
          </div>
        </div>

            <div className="interest-note">
              <h4>¿Sabías que...?</h4>
              <p>
                La subscripción por persona da la posibilidad de acceder gratuitamente a alguien
                con escasos recursos que lo necesite.
              </p>
              <span>Educate a ti y a alguien que lo necesite</span>
            </div>

      </div>
    </>
  );
};

export default Interests;
