import React from 'react';
import activityTrendChartPlaceholder from '../styles/img/Lernaktivitäten.svg'

const ActivityTrendChart = () => {
// Leider ist das Lernaktivitätendiagramm derzeit nur ein Bild zu Demonstrationszwecken!
    return (
        <div className="progress-box-1">
            <div>
                <img style={{width: '110%'}} src={activityTrendChartPlaceholder} alt="Lernaktivitäten"/>
            </div>
        </div>
    );
}

export default ActivityTrendChart;
