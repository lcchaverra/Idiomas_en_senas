import React, {useState} from 'react';
import Modal from './Modal';
import GitTest from '../assets/gif/señas1.gif';

const Courses: React.FC = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedGif, setSelectedGif] = useState('');
    const [selectedLevelInfo, setSelectedLevelInfo] = useState('');
    const [selectedCourse, setSelectedCourse] = useState('');
    const [courseLevels, setCourseLevels] = useState([
    { level: 'Básico', info: 'Contenido para nivel básico' },
    { level: 'Intermedio', info: 'Contenido para nivel intermedio' },
    { level: 'Avanzado', info: 'Contenido para nivel avanzado' },
    ]);

    const handleGifClick = (gif: string) => {
    setSelectedGif(gif);
    setSelectedCourse('');
    setShowModal(false);
    };

    const handleLevelClick = (level: string, levelInfo: string) => {
    setSelectedLevelInfo(levelInfo);
    setSelectedCourse(level);
    setShowModal(true);
    };

    const handleCloseModal = () => {
    setShowModal(false);
    setSelectedGif('');
    setSelectedLevelInfo('');
    setSelectedCourse('');
    };


    
    return (
    <div className="gif-course-container">
        <div>
        <img
            src={GitTest} // Reemplaza con la ruta de tu gif
            alt="Gif"
            onClick={() => handleGifClick(GitTest)} // Reemplaza con la ruta de tu gif
            className="gif"
        />
        {selectedGif && (
            <div className="course-levels">
            {courseLevels.map((course, index) => (
                <div key={index} className="course-level">
                <h4 onClick={() => handleLevelClick(course.level, course.info)}>
                    {course.level}
                </h4>
                </div>
            ))}
            </div>
        )}
        </div>
        {showModal && (
        <Modal onClose={handleCloseModal}>
            <h2>Información del curso</h2>
            {selectedCourse && <p>Nivel: {selectedCourse}</p>}
            <p>{selectedGif}</p>
            <p>{selectedLevelInfo}</p>
        </Modal>
        )}
    </div>
    );
};


export default Courses