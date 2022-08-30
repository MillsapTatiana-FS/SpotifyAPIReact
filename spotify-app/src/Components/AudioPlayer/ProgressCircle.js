import React from 'react';
import './progressCircle.css';

const circle = ({color, percentage, size, strokeWidth}) => {
    const radius = (size/2)-10;
    const circ = 2 * Math.PI * radius - 20;
    const strokePct =((100 - Math.round(percentage) *circ)/100);

    return (
        <circle 
        r={radius}
        cx="50%"
        cy="50%"
        fill="transparent"
        stroke={strokePct !== circ ? color : ""}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        ></circle>
    );
}
export default function ProgressCircle({ percentage, isPlaying, image, size, color }){
    return ( 
    <div className="progress-circle">
        <svg width={size} height={size}>
            <g>
                <circle strokeWidth={"0.4rem"} color="#3B4F73" size={size} />
                <circle color={color} percentage={percentage} size={size} strokeWidth={"0.6rem"} />
            </g>
        </svg>
    </div>
    );
}
