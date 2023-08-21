import React, { useState } from 'react';
import '../styles/css/dashboard.css';
import ProgressBar from '../components/progress-bar';
import PopUp from "./study-progress-pop-up";
import jsonData from '../resource/curriculum.json';

function Dashboard() {
    const [userName, setUserName] = useState('Mustermann');
    const [motivation, setMotivation] = useState('Bist du voll motiviert?');

    // 将totalECTS和isECTS的状态移到这里来
    const [maxValue, setMaxValue] = useState(100); // totalECTS
    const [currentValue, setCurrentValue] = useState(0); // isECTS

    const [showPopUp, setShowPopUp] = useState(false);

    return (
        <div className="dashboard-body">
            <div className="greetings">
                <h1 className="greetings-1">Hey, {userName}!</h1>
                <p className="greetings-2">{motivation}</p>
            </div>
            <div className="progress">
                <div className="progress-1">
                    <h3 className="progress-1-1">Dein Lehrfortschritt</h3>
                    <a className="progress-1-2">Bearbeiten</a>
                </div>
                <div className="progress-body">
                    <div className="progress-box-1" onClick={() => setShowPopUp(true)}>
                        <div className="progress-graphic">
                            <ProgressBar max={maxValue} value={currentValue} />
                        </div>
                        {showPopUp && (
                            <PopUp
                                onClose={() => setShowPopUp(false)}
                                data={jsonData}
                                onECTSChange={setCurrentValue}
                                setMaxValue={setMaxValue}
                            />
                        )}
                        <div className="progress-text">Dein Studienfortschritt</div>
                    </div>
                    <div className="progress-box-1">
                        <div className="progress-graphic">
                            Graphic
                        </div>
                        <div className="progress-text">
                            Modul: {}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <h3>TODO</h3>
                </div>
                <div>容器</div>
            </div>
            <div>
                <div>
                    <h3>Quicklinks</h3>
                </div>
                <div>容器</div>
            </div>
        </div>
    );
}

export default Dashboard;
