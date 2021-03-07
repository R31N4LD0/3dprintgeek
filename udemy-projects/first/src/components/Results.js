import React from "react";

function Results({correctResults, wrongResults, countCorrect}) {
    return(
        <div className="results">
            <div className="title">
                <p>Corrects: {countCorrect}</p>
            </div>
            <div className="resultsContainer">
                <div className="correctResults">
                    <p className="row">Correct</p>
                    {correctResults.map((correctWord, index) => (
                        <div key={index} className="row">
                            <p>{correctWord}</p>
                        </div>
                    ))}
                </div>
                <div className="wrongResults">
                    <p className="row">Wrong</p>
                    {wrongResults.map((wrongWord, index) => (
                        <div key={index} className="row">
                            <p>{wrongWord}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Results;