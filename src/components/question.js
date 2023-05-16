import React, { useState, useContext, useEffect } from "react";
import questions from "../data/questions.json";
import Completion from "./completion";
import { globalObj } from "../App";
const Question = () => {
  const [questionIdx, setQuestionIdx] = useState(0);
  const [option, setOption] = useState();
  const currQuestion = questions[questionIdx];
  const [timer, setTimer] = useState(60);
  const [submitFlag, setSubmitFlag] = useState(false);

  const context = useContext(globalObj);

  const handleOptionChange = (optionNo) => {
    setOption(optionNo);
  };

  const handleSubmit = () => {
    setQuestionIdx((prev) => prev + 1);

    if (option === currQuestion?.correctAnswer) {
      context.correctAnswers = context.correctAnswers + 10;
    } else {
      //?: for negative marking
    }
    setOption(0);
    if (currQuestion.id == 5) {
      context.timeTaken = 60 - timer;
    }
  };

  const handleTimeFormat = (t) => {
    const seconds = t % 60;
    const minutes = Math.floor(t / 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    let handleTime;
    if (!submitFlag) {
      handleTime = setInterval(() => {
        setTimer((prevTimer) => {
          if (prevTimer == 0) {
            clearInterval(handleTime);
            return prevTimer;
          }
          return prevTimer - 1;
        });
      }, 1000);
    }

    return () => {
      clearInterval(handleTime);
    };
  }, [submitFlag]);

  return (
    <div className="question-box">
      {currQuestion && timer != 0 ? (
        <div>
          <div className="top-flex">
            <div className="question-count">({currQuestion.id} /5)</div>
            <div className="question-timer"> {handleTimeFormat(timer)}</div>
          </div>

          <h5 className="question-text">{currQuestion.question}</h5>
          <div className="">
            {currQuestion.options.map((i, index) => (
              <label key={index} className="option-box">
                <input
                  onChange={() => handleOptionChange(i.optionNumber)}
                  type="radio"
                  value={option}
                  checked={option == i.optionNumber}
                />

                {i.optionText}
              </label>
            ))}
            <button className="btn" onClick={() => handleSubmit()}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <Completion />
      )}
    </div>
  );
};

export default Question;
