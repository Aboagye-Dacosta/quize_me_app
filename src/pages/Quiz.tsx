import QuizContextProvider from "../context/QuizContext";
import QuizDetails from "../features/quiz/QuizDetails";

function Quiz() {
  return (
    <QuizContextProvider>
      <QuizDetails />
    </QuizContextProvider>
  );
}

export default Quiz;
