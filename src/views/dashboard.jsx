import React, {useState} from 'react';
import '../styles/css/dashboard.css';
import '../styles/css/todo.css'
import Progress from './progress';
import jsonData from '../resource/ModulhandbuchBASA.json';
import Quicklinks from "./quicklinks";
import Todos from "./todo";

function Dashboard() {
    const [userName, setUserName] = useState('Alex');
    const [motivation, setMotivation] = useState('Behalte den Überblick und bleib motiviert!');

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

            <div className="flex-container">
                <div>
                    <div>
                        <h3>TODO</h3>
                    </div>
                    <Todos/>
                </div>
                <div>
                    <div>
                        <h3>Quicklinks</h3>
                    </div>
                    <Quicklinks/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
