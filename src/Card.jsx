import React from 'react';

export default function Card({colorCode}) {
    return (
        <div className="card">
            <div className="color-card" style={{backgroundColor: colorCode}}></div>
            <div className="color-code">{colorCode}</div>
        </div>
    )
}
