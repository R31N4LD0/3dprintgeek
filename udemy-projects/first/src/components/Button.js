import React from 'react';

function Button({handleStart, disabled}) {
    return (
        <button onClick={handleStart}>{disabled ? "Start" : "Restart"}</button>
    );
}

export default Button;