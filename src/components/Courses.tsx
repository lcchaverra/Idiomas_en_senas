import React, {useState} from 'react';
import Modal from './Modal';

interface CourseLevel {
    level: string;
    info: string;
  }
  
  interface Course {
    title: string;
    gif: string;
    levels: CourseLevel[];
  }
  
  interface GifCourseProps {
    courses: Course[];
  }

const Courses: React.FC<GifCourseProps> = ({courses}) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedLevelInfo, setSelectedLevelInfo] = useState('');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [selectedLevel, setSelectedLevel] = useState<CourseLevel | null>(null);
  
    const handleGifClick = (course: Course) => {
      setSelectedCourse(course);
      setSelectedLevelInfo('');
      setSelectedLevel(null);
      setShowModal(false);
    };
  
    const handleLevelClick = (level: CourseLevel) => {
      setSelectedLevelInfo(level.info);
      setSelectedLevel(level);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setSelectedLevelInfo('');
      setSelectedCourse(null);
      setSelectedLevel(null);
    };
  
    return (
      <>
      <div className="gif-course-container">
        {courses.map((course, courseIndex) => (
          <div key={courseIndex} className="course-container">
            <h5>{course.title}</h5>
            <div>
              <img
                src={course.gif}
                alt="Gif"
                onClick={() => handleGifClick(course)}
                className="gif"
                />
            </div>
            {selectedCourse === course && (
              <div className="course-levels">
                {course.levels.map((level, levelIndex) => (
                  <div key={levelIndex} className="course-level">
                    <h4 onClick={() => handleLevelClick(level)}>{level.level}</h4>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        {showModal && selectedLevel && (
          <Modal onClose={handleCloseModal}>
            <h2>Información del curso</h2>
            <p>Nivel: {selectedLevel.level}</p>
            <p>{selectedLevelInfo}</p>
          </Modal>
        )}
      </div>
        </>
    );
  };
  


export default Courses