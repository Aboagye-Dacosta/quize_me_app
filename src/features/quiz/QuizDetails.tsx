import { useQuiz } from "../../context/QuizContext";

import QuizCompeted from "./QuizCompeted";
import QuizInitial from "./QuizInitial";
import QuizSession from "./QuizSession";
// import QuizIntermediate from "./QuizIntermediate"

function QuizDetails() {
  const {
    quizState: { pageState },
  } = useQuiz();
  return (
    <>
      {pageState === "initial" && <QuizInitial />}
      {pageState === "start" && <QuizSession />}
      {pageState === "complete" && <QuizCompeted />}
    </>
  );
}

export default QuizDetails;
