import React from 'react';

// 这个进度条组件接受两个props: max 和 value。
// max 是进度条的最大值（例如，任务的预期完成时间或预期值）
// value 是当前的进度值（例如，已经完成的任务数量或实际值）

const ProgressBar = ({max, value}) => {
    const percentage = (value / max) * 100;

    return (
        <div className="progress-bar-container"
             style={{backgroundColor: '#6C54FF', width: '75%', height: '12px', borderRadius: '10px'}}>
            <div className="progress" style={{
                backgroundColor: '#ED6C36',
                width: `${percentage}%`,
                height: '100%',
                borderRadius: '15px'
            }}></div>
        </div>
    );
};

export default ProgressBar;
