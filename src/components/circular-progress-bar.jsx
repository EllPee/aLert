import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = (props) => {
    // Angenommen, die API gibt die folgende Datenstruktur zurück：
    // const apiResponse = await fetch("YOUR_API_ENDPOINT");
    // const data = await apiResponse.json();
    // const { moduleName, actualCount, totalCount } = data;

    // Für die Simulation verwenden wir die folgenden Daten：
    const moduleName = "O 1 Geschichte, Theoriezugänge und Struktur Sozialer Arbeit";
    const actualCount = 10;
    const totalCount = 100;

    const percentage = (actualCount / totalCount) * 100;

    return (
        <div className="progress-box-1">
            <div className="progress-circular">
                <CircularProgressbar
                    value={percentage.toFixed(1)}
                    text={`${percentage.toFixed(1)}%`}
                    strokeWidth={10}
                    styles={buildStyles({
                        pathColor: `#ED6C36`,
                        textColor: 'black',
                        trailColor: '#6C54FF',

                    })}
                />
            </div>
            <div className="progress-text">
                Modul: {moduleName}
            </div>
        </div>
    );
}

export default CircularProgressBar;
