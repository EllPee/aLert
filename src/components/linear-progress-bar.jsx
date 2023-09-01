import React from 'react';

const LinearProgressBar = ({max, value}) => {
    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar-container"
             style={{backgroundColor: '#6C54FF', width: '75%', height: '10px', borderRadius: '10px'}}>
            <div className="progress" style={{
                backgroundColor: '#ED6C36',
                width: `${percentage}%`,
                height: '100%',
                borderRadius: '15px'
            }}></div>
        </div>
    );
};

export default LinearProgressBar;
