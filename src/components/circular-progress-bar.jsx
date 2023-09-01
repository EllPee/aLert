import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircularProgressBar = (props) => {
    // 假设API返回的数据结构如下：
    // const apiResponse = await fetch("YOUR_API_ENDPOINT");
    // const data = await apiResponse.json();
    // const { moduleName, actualCount, totalCount } = data;

    // 为了模拟，我们使用以下数据：
    const moduleName = "Sample Module";
    const actualCount = 30;
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
