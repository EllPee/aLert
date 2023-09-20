import React from 'react';
import LinearProgressBar from '../components/linear-progress-bar';
import '../styles/css/progress.css';
import PopUp from "./study-progress-pop-up";
import CircularProgressBar from "../components/circular-progress-bar";
import LinearProgressBars from "../components/linear-progress-bars";
import ActivityTrendChart from "../components/activity-trend-chart";


function Progress({
                      currentValue,
                      maxValue,
                      showPopUp,
                      completedCourses,
                      setShowPopUp,
                      setMaxValue,
                      setCurrentValue,
                      setCompletedCourses,
                      jsonData,
                  }) {

    // Simulierte Daten:
    const expected = 100; // Beispieldaten
    const actual = 75;    // Beispieldaten
    const moduleName = "Modulname"; // Beispieldaten
// Holen Sie die tatsächlichen API-Daten:
// const { expected, actual, moduleName } = await fetchData();

    return (
        <div>
            <div className="progress-titel">
                <h3>Dein Lernfortschritt</h3>
                {/*<a className="progress-edit">Bearbeiten</a>*/}
                {/*Schaltflächen, die im Moment nicht interaktiv sind, werden auskommentiert.*/}
            </div>
            <div className="progress-body">
                <div className="progress-box-1" onClick={() => setShowPopUp(true)}>
                    <p className="progress-value">{(currentValue / maxValue * 100).toFixed(1)}%</p>
                    <div className="progress-graphic">
                        <LinearProgressBar max={maxValue} value={currentValue}/>
                    </div>
                    {showPopUp && (
                        <PopUp
                            onClose={() => setShowPopUp(false)}
                            data={jsonData}
                            onECTSChange={setCurrentValue}
                            setMaxValue={setMaxValue}
                            currentValue={currentValue}
                            completedCourses={completedCourses}
                            setCompletedCourses={setCompletedCourses}
                        />
                    )}
                    <div className="progress-text">Dein Studienfortschritt</div>
                </div>
                <CircularProgressBar style={{flex: "0 0 auto"}}/>
                <LinearProgressBars style={{flex: "0 0 auto"}}/>
                <ActivityTrendChart/>
            </div>
        </div>
    );
}

export default Progress;
