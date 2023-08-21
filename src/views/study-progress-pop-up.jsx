import React, { useState, useEffect } from 'react';
import '../styles/css/popup-styles.css';

const CourseCard = ({ course, onConfirm }) => {
    const [showConfirm, setShowConfirm] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    const handleEditClick = () => setShowConfirm(true);

    const handleConfirm = () => {
        const ectsChange = isCompleted ? -course.ects : course.ects;
        onConfirm(ectsChange);
        setIsCompleted(!isCompleted);
        setShowConfirm(false);
    };

    return (
        <div className={`card ${isCompleted ? 'completed' : ''}`}>
            {showConfirm && (
                <div className="confirmation">
                    {isCompleted ? "Als unerledigt markiert?" : "Als erledigt markiert?"}
                    <button onClick={() => setShowConfirm(false)}>Abbrechen</button>
                    <button onClick={handleConfirm}>Ja</button>
                </div>
            )}
            <button className="card-edit" onClick={handleEditClick}>Bearbeiten</button>
            <p className="card-code">{course.code}</p>
            <p className="card-title">{course.title}</p>
            <p className="card-ects">{course.ects} ECTS</p>
        </div>
    );
};

const PopUp = ({ onClose, data, onECTSChange, setMaxValue }) => {
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
            <h2 className="data">{onECTSChange}/{totalECTS} ECTS ({(onECTSChange / totalECTS * 100).toFixed(2)}%)</h2>
            {Object.keys(data).map(category => (
                <div key={category} className="category-container">
                    <p className="category-title">(Studiengang: {category})</p>
                    <div className="card-container">
                        {data[category].map(course => (
                            <CourseCard key={course.code} course={course} onConfirm={handleECTSChange} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PopUp;
