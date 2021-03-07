import React from 'react'
import Button from './Button'

function Typeracer(props) {
    const {
        newWord,
        disabled,
        time,
        inputValue,
        setInputValue,
        animation,
        handleInput,
        handleStart,
    } = props;
    return(
        <div className="typeRacer">
            <div className="wordOutput">
                <p>{newWord}</p>
            </div>
            <div
                style={{animation: animation !== null ? animation : ""}} 
                className="time"
            >
                <p>{time}</p>
            </div>
            <div className="wordValues">
                <input 
                    type="text" 
                    disabled={disabled && disabled}
                    value={inputValue}
                    onKeyPress={(e) => handleInput(e)}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder={disabled ? "" : "Start typing..."}
                />
                <Button handleStart={handleStart} disabled={disabled} />
            </div>
        </div>
    );
}

export default Typeracer;