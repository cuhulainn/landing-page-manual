import { useState } from "react";
import Results from "../components/Results";
import Quiz from "../components/Quiz";
import LandingPage from "../components/LandingPage";

export default function App() {
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [isRejection, setIsRejection] = useState(false);

  const showTheQuiz = () => {
    setShowQuiz(true);
  };

  return (
    <>
      {showQuiz ? (
        showResult ? (
          <Results isRejection={isRejection} />
        ) : (
          <Quiz
            setShowResult={setShowResult}
            setIsRejection={setIsRejection}
          ></Quiz>
        )
      ) : (
        <LandingPage showTheQuiz={showTheQuiz} />
      )}
    </>
  );
}
