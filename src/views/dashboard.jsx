import React, {useState} from 'react';
import '../styles/css/dashboard.css';
import Progress from './progress';
import jsonData from '../resource/curriculum.json';

function Dashboard() {
    const [userName, setUserName] = useState('Mustermann');
    const [motivation, setMotivation] = useState('Bist du voll motiviert?');

    const [maxValue, setMaxValue] = useState(100); // totalECTS
    const [currentValue, setCurrentValue] = useState(0); // isECTS

    const [showPopUp, setShowPopUp] = useState(false);
    const [completedCourses, setCompletedCourses] = useState({});

    return (
        <div className="dashboard-body">
            <div className="greetings">
                <h1 className="greetings-1">Hey, {userName}!</h1>
                <p className="greetings-2">{motivation}</p>
            </div>
            <Progress
                currentValue={currentValue}
                maxValue={maxValue}
                showPopUp={showPopUp}
                completedCourses={completedCourses}
                setShowPopUp={setShowPopUp}
                setMaxValue={setMaxValue}
                setCurrentValue={setCurrentValue}
                setCompletedCourses={setCompletedCourses}
                jsonData={jsonData}
            />
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
