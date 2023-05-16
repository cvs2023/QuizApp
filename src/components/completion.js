import React, { useContext } from "react";
import { globalObj } from "../App";
const Completion = () => {
  const context = useContext(globalObj);
  const handlePlayAgain = () => {
    context.correctAnswers = 0;
    window.location.href = "";
  };
  return (
    <div>
      <div className="completion">
        Time Taken: {context.timeTaken}s
        <div> Karma Points: {context.correctAnswers}</div>
        <button className="btn" onClick={() => handlePlayAgain()}>
          Play Again
        </button>
      </div>
    </div>
  );
};

export default Completion;
