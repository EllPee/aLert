import React, {useState, useEffect} from 'react';
import LinearProgressBar from './linear-progress-bar';

const LinearProgressBars = () => {
    // Simulieren die von der API abgerufenen Daten
    const [progressData, setProgressData] = useState([
        {moduleName: 'Eins', expected: 100, actual: 45},
        {moduleName: 'Zwei', expected: 90, actual: 20},
        {moduleName: 'Drei', expected: 80, actual: 40},
    ]);

    useEffect(() => {
        // Hier könnten Sie die Logik für die API-Anfrage hinzufügen und die Daten mit setProgressData aktualisieren
        // Da wir jedoch nur Daten simulieren, müssen wir nichts weiter tun
    }, []);

    return (
        <div className="progress-box-1">
            {progressData.map((module, index) => (
                <div key={index} style={{marginBottom: '10px', width: '100%'}}>
                    <div className="progress-text"
                         style={{fontSize: '14px', marginBottom: '2px'}}>Modul: {module.moduleName} {(module.actual/module.expected * 100).toFixed(1)}%</div>
                    <div className="progress-graphic-bars">
                    <LinearProgressBar max={module.expected} value={module.actual}/>
                </div>
                </div>
            ))}
        </div>
    );
};

export default LinearProgressBars;
