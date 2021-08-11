import React, { useState } from "react";
import Head from "next/head";
import styles from "./Quiz.module.scss";
import quiz from "../resources/quiz.json";

function Quiz({ setShowResult, setIsRejection }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const questions = quiz.questions;

  const handleAnswerOptionClick = (isRejected, value) => {
    //handle case where they chose a "rejection answer"
    if (isRejected) {
      setShowResult(true);
      setIsRejection(true);
    }

    //capture answer and advance to next question/result
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setAnswers({ ...answers, [`answer${currentQuestion}`]: value });
    } else {
      setShowResult(true);
    }
  };

  const handleBackButtonClick = () => {
    const previousQuestion = currentQuestion - 1;
    setCurrentQuestion(previousQuestion);
  };

  return (
    <>
      <Head>
        <title>Manual | Can we help? Quiz</title>
        <meta name="description" content="How can Manual help you?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.quizContainer}>
        <div className={styles.questionContainer}>
          <div className={styles.questionCount}>
            <span>Question {currentQuestion + 1}</span> of {questions.length}
          </div>
          <div className={styles.questionText}>
            {questions[currentQuestion].question}
          </div>
        </div>
        <div className={styles.answersContainer}>
          {questions[currentQuestion].options.map((option, index) => (
            <div className={styles.answerOptionContainer} key={index}>
              <button
                className={`${styles.answerOption} ${
                  option.value === answers[`answer${currentQuestion}`]
                    ? styles.selectedOption
                    : null
                }`}
                onClick={() =>
                  handleAnswerOptionClick(option.isRejection, option.value)
                }
                key={index}
              >
                <div
                  key={index}
                  dangerouslySetInnerHTML={{ __html: option.display }}
                ></div>
              </button>
            </div>
          ))}
        </div>
        {currentQuestion === 0 ? null : (
          <button className={styles.backButton} onClick={handleBackButtonClick}>
            <span>&#x2039;</span> Previous Question
          </button>
        )}
      </div>
    </>
  );
}

export default Quiz;
