import React from "react";


const Skill = ({name, points}) => {
    return (
        <div className="counter-v1 text-center">
            <span className="number-wrap">
                <span className="number number-counter" data-number={points}>0</span>
                <span className="append-text">%</span>
            </span>
            <span className="counter-label">{name}</span>
        </div>
            
    );
}

export default Skill;