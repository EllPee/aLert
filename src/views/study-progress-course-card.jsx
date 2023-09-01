import React, {useState} from 'react';
import '../styles/css/course-card.css';

const CourseCard = ({course, onConfirm, isCompleted, setCompletedCourses}) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleEditClick = () => setShowConfirm(true);

    const handleConfirm = () => {
        const ectsChange = isCompleted ? -course.ects : course.ects;
        onConfirm(ectsChange);
        setCompletedCourses(prev => ({
            ...prev,
            [course.code]: !isCompleted
        }));
        setShowConfirm(false);
    };

    return (
        <div className={`card ${isCompleted ? 'completed' : ''}`}>
            {showConfirm && (
                <div className="confirmation">
                    <p className="confirmation-text">
                        {isCompleted ? 'Als unerledigt markiert?' : 'Als erledigt markiert?'}
                    </p>
                    <div className="button-container">
                        <button className="cancel-button" onClick={() => setShowConfirm(false)}>
                            Abbrechen
                        </button>
                        <button className="confirm-button" onClick={handleConfirm}>
                            Ja
                        </button>
                    </div>
                </div>
            )}
            <button className="card-edit" onClick={handleEditClick}>
                Bearbeiten
            </button>
            <p className="card-code">{course.code}</p>
            <p className="card-title">{course.title}</p>
            <div className="marker-box">
                <div className={`marker ${isCompleted ? 'completed' : ''}`}>
                    {isCompleted ? 'Erledigt' : ''}
                </div>
            </div>
            <p className="card-ects">{course.ects} ECTS</p>
        </div>
    );
};

export default CourseCard;
