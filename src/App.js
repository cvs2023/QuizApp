import "./App.css";
import { useState, createContext } from "react";
import Home from "./components/home";
import Question from "./components/question";

export const globalObj = createContext();

function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const timeTaken = 0;
  const handleCorrectAnswers = (i) => {
    setCorrectAnswers(i);
  };

  const handleTakeQuiz = () => {
    setShowQuiz(true);
  };
  return (
    <globalObj.Provider
      value={{ handleCorrectAnswers, correctAnswers, timeTaken }}
    >
      <div className="root-container">
        <div className="container">
          {showQuiz ? <Question /> : <Home handleTakeQuiz={handleTakeQuiz} />}
        </div>
      </div>
    </globalObj.Provider>
  );
}

export default App;
