import React from "react";
const Home = ({ handleTakeQuiz }) => {
  const handleQuiz = () => {
    handleTakeQuiz();
  };
  return (
    <div className="App">
      <h2>The Daily MS Excel Quiz</h2>
      <div>
        <h3>This Quiz Includes</h3>
        <ul>
          <li>50% Passing Percentage</li>
          <li>5 Questions</li>
          <li>10 Mins</li>
          <li>1 Attempt Daily</li>
        </ul>
      </div>

      <div className="center-text">
        <button onClick={() => handleQuiz()}>Take Quiz</button>
      </div>
    </div>
  );
};

export default Home;
