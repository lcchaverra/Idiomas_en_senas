import VirtualLogo from '../assets/icons/servicio-al-cliente.png';
import { useState } from 'react';

const Assistant = () => {

    const [modal,setModal] = useState(false)

    const openModal = (): any => {
        (modal)? setModal(false) :setModal(true);
    }


  return (
    <>
    <div className="assistant-container">
        <div className="virtual-assistant" onClick={openModal}>
            <div className="virtual-logo">
                <img src={VirtualLogo} alt="Logo del asistente virtual" />
            </div>
        </div>
            <div className={`virtual-modal ${(modal)? 'show' : ' '}`}>
                <h5>Soy un modal</h5>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, sunt assumenda veniam laudantium, vel inventore vero ab omnis dolorum quidem quo, nisi laboriosam molestias aut at dignissimos quis. Nemo, a!</p>
            </div>
    </div>
    </>
  )
}

export default Assistant