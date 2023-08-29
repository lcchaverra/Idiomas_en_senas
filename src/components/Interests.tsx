import React, { useState, useRef, useEffect } from "react";
import MexicoFlag from '../assets/icons/flag.png';
import ArgentinaFlag from '../assets/icons/argentina.png';
import FranceFlag from '../assets/icons/france.png';

interface Option {
  id: number;
  label: string;
  value: string;
  flag: string;
}

const options: Option[] = [
  { id:1 ,label: "Lengua de Señas Francesas", value: "Lengua de Señas Francesas", flag: FranceFlag  },
  { id:2 ,label: "Lengua de Señas Mexicana", value: "Lengua de Señas Mexicana", flag: MexicoFlag },
  { id:3 ,label: "Lengua de Señas Argentina", value: "Lengua de Señas Argentina" , flag: ArgentinaFlag },
];

const Interests: React.FC = () => {

  const selectedOptionRef = useRef(null)

  const voteHandle: any = () => {
    console.log("su voto", selectedOptionRef.current)
  }

  return (
    <>
      <div className="interest-container">
        <h3>¿Qué idiomas te interesa aprender en la lengua de señas?</h3>
        <div className="interest-grid-container">
          <select className="interest-select" ref={selectedOptionRef}>
            {
              options.map(option => (
                <option key={option.id} className="interest-item" value={option.value}>{option.label}
                  {/* <img src={option.flag} alt="Bandera de la opcion a escoger" /> */}
                </option>
                ))
            }
          </select>
        <div className="interest-note">
            <p>La subscripción por persona da la posibilidad de acceder a alguien con escasos recursos que lo necesite.</p>
            <q>
              Educate a ti y a alguien que lo necesite
            </q>
        </div>
      </div>
          <button className="btn" onClick={voteHandle}>Votar</button>
          <p>El objetivo es ampliar cupos en la lengua de señas en otros idiomas</p>
        </div>
    </>
  );
};

export default Interests;
