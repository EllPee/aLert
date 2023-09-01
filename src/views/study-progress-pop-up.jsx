import React, {useEffect} from 'react';
import CourseCard from './study-progress-course-card';
import '../styles/css/popup-styles.css';

const PopUp = ({
                   onClose,
                   data,
                   onECTSChange,
                   setMaxValue,
                   currentValue,
                   completedCourses,
                   setCompletedCourses,
               }) => {
    const totalECTS = Object.values(data).reduce((total, categoryCourses) => {
        const categoryECTS = categoryCourses.reduce((categoryTotal, course) => {
            return categoryTotal + course.ects;
        }, 0);
        return total + categoryECTS;
    }, 0);

    useEffect(() => {
        setMaxValue(totalECTS);
    }, [totalECTS, setMaxValue]);

    const handleECTSChange = (change) => {
        onECTSChange(prev => prev + change);
    };

    return (
        <div onClick={(e) => e.stopPropagation()} className="popup-container">
            <button onClick={onClose} className="close-button">
                X
            </button>
            <p className="titel">Dein Studienfortschritt:</p>
            <h2 className="data">
                {currentValue}/{totalECTS} ECTS ({(currentValue / totalECTS * 100).toFixed(1)}%)
            </h2>
            {Object.keys(data).map(category => (
                <div key={category} className="category-container">
                    <p className="category-title">(Studiengang: {category})</p>
                    <div className="card-container">
                        {data[category].map(course => (
                            <CourseCard
                                key={course.code}
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
