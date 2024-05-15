import { useEffect } from "react";
import { useQuiz } from "../../context/QuizContext";

import QuizCompleted from "./QuizCompleted";
import QuizInitial from "./QuizInitial";
import QuizSession from "./QuizSession";

function QuizDetails() {
  const {
    quizState: { pageState },
  } = useQuiz();

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <>
      {pageState === "initial" && <QuizInitial />}
      {pageState === "start" && <QuizSession />}
      {pageState === "complete" && <QuizCompleted />}
    </>
  );
}

export default QuizDetails;
