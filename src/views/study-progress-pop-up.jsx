import React, {useState, useEffect} from 'react';
import '../styles/css/popup-styles.css';

const CourseCard = ({course, onConfirm, isCompleted, setCompletedCourses}) => {
    const [showConfirm, setShowConfirm] = useState(false);
    // const [isCompleted, setIsCompleted] = useState(false);

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
                    <p className="confirmation-text">{isCompleted ? "Als unerledigt markiert?" : "Als erledigt markiert?"}</p>
                    <div className="button-container">
                        <button className="cancel-button" onClick={() => setShowConfirm(false)}>Abbrechen</button>
                        <button className="confirm-button" onClick={handleConfirm}>Ja</button>
                    </div>
                </div>

            )}
            <button className="card-edit" onClick={handleEditClick}>Bearbeiten</button>
            <p className="card-code">{course.code}</p>
            <p className="card-title">{course.title}</p>
            <div className="marker-box">
                <div className={`marker ${isCompleted ? 'completed' : ''}`}>{isCompleted ? 'Erledigt' : ''}</div>
            </div>
            <p className="card-ects">{course.ects} ECTS</p>
        </div>
    );
};

const PopUp = ({onClose, data, onECTSChange, setMaxValue, currentValue, completedCourses, setCompletedCourses}) => {
    const totalECTS = Object.values(data).reduce((total, categoryCourses) => {
        const categoryECTS = categoryCourses.reduce((categoryTotal, course) => {
            return categoryTotal + course.ects;
        }, 0);
        return total + categoryECTS;
    }, 0);

    useEffect(() => {
        setMaxValue(totalECTS); // 当 PopUp 被加载时，设置 maxValue 的值
    }, [totalECTS, setMaxValue]);

    const handleECTSChange = (change) => {
        onECTSChange(prev => prev + change);
    };

    return (
        <div onClick={(e) => e.stopPropagation()} className="popup-container">
            <button onClick={onClose} className="close-button">X</button>
            <p className="titel">Dein Studienfortschritt:</p>
            <h2 className="data">{currentValue}/{totalECTS} ECTS ({(currentValue / totalECTS * 100).toFixed(1)}%)</h2>
            {Object.keys(data).map(category => (
                <div key={category} className="category-container">
                    <p className="category-title">(Studiengang: {category})</p>
                    <div className="card-container">
                        {data[category].map(course => (
                            <CourseCard key={course.code}
                                        course={course}
                                        onConfirm={handleECTSChange}
                                        isCompleted={completedCourses[course.code]}
                                        setCompletedCourses={setCompletedCourses}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};


export default PopUp;
