import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useError } from "../../context/ErrorContext";
import { useQuiz } from "../../context/QuizContext";
import {
  getSubjectQuestions,
  getSubjectQuestionsLen,
} from "../../services/dataApi";
import Button from "../../ui/Button";
import QuizQuestion from "./QuizQuestion";

const StyledQuizSession = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  gap: 2rem;
`;

const StyledQuizQuestionTracker = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;

  background-color: var(--color-grey-0);
  padding: 1rem 2rem;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  & span {
    display: inline-block;
    font-weight: bold;
    background: var(--bg-brand);
    padding: 1rem;
    border-radius: var(--border-radius-sm);
  }
`;

const StyledButton = styled(Button)`
  min-width: 20rem;
  font-weight: bold;
  font-size: 1.9rem;
`;

function QuizSession() {
  const { setErrorMessage } = useError();
  const { subject } = useParams();

  const {
    dispatch,
    quizState: { cumScore, currentQuestion, hasAnswered, hasSelected },
  } = useQuiz();

  const questions = getSubjectQuestions(subject!);
  const questionsLen = 2; //getSubjectQuestionsLen(subject!);

  const handleSubmit = () => {
    if (!hasSelected) {
      setErrorMessage("Choose an answer before submitting");
    } else {
      dispatch({
        type: "/start/submit",
        payload: {
          answer: questions[currentQuestion].answer,
        },
      });
    }
  };

  const handleNext = () => {
    dispatch({
      type: "/start/next",
      payload: {
        questionsLen,
      },
    });
  };

  const handleComplete = () => {
    dispatch({
      type: "/complete",
    });
  };

  return (
    <StyledQuizSession layout="position" layoutId="quiz">
      <StyledQuizQuestionTracker>
        <p>
          Question No: <span> {currentQuestion + 1}</span>
        </p>
        <p>
          Total Points <span>{cumScore}</span>
        </p>
      </StyledQuizQuestionTracker>
      <QuizQuestion question={questions[currentQuestion].question}>
        {questions[currentQuestion].options.map((option, index) => (
          <QuizQuestion.Option key={index} option={option} />
        ))}
      </QuizQuestion>

      {!hasAnswered && (
        <StyledButton onClick={handleSubmit}>Submit </StyledButton>
      )}
      {hasAnswered && questionsLen !== currentQuestion + 1 && (
        <StyledButton onClick={handleNext}>Next &rarr; </StyledButton>
      )}
      {hasAnswered && questionsLen === currentQuestion + 1 && (
        <StyledButton onClick={handleComplete}>Complete &rarr;</StyledButton>
      )}
    </StyledQuizSession>
  );
}

export default QuizSession;
