import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

import { useError } from "../../context/ErrorContext";
import { useQuiz } from "../../context/QuizContext";

import correct from "../../assets/correct.mp3"
import wrong from "../../assets/wrong.mp3"

const StyledQuizQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.7rem;

  padding: 0 0 0 4rem;
  border-left: 2px dashed var(--color-brand-900);
  position: relative;

  z-index: 100;
`;

const Question = styled.p`
  font-size: 2.3rem;
  padding: 1rem 2rem;
  box-shadow: var(--shadow-md);
  max-width: 50rem;

  background: var(--bg-brand);
  border-radius: var(--border-radius-lg);
  z-index: 1000;
`;

const StyledQuestionOption = styled.div`
  display: flex;
  position: relative;
  padding: 1rem;
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);

  &:hover {
    box-shadow: var(--shadow-md);
  }
  & input[type="radio"] {
    width: 110%;
    height: 100%;
    position: absolute;
    top: 0;
    left: -5.5rem;
    z-index: 10;
    opacity: 0;

    &:hover ~ div::before {
      opacity: 1;
    }
  }
`;

const StyledQuestionRadio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: var(--color-grey-800);

  position: absolute;
  left: -5.5rem;
  top: 50%;
  transform: translateY(-50%);

  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    border-radius: 100%;

    border: 2px solid var(--color-brand-900);
    opacity: 0;
  }

  &:hover &::before {
    opacity: 1;
  }
`;

const StyledRadioCircle = styled(motion.div)`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 100%;

  background: var(--bg-brand);
  position: absolute;
  z-index: 10000;
`;

function QuizQuestion({
  children,
  question,
}: {
  children: React.ReactNode;
  question: string;
}) {
  return (
    <StyledQuizQuestion>
      <Question>{question} </Question>
      {children}
    </StyledQuizQuestion>
  );
}

function QuestionOption({ option }: { option: string }) {
  const {
    dispatch,
    quizState: { selectedAnswer, hasAnswered, isCorrectAnswer , fromLocal},
  } = useQuiz();
  const { setErrorMessage } = useError();
  const isSelected = selectedAnswer === option;
  
  const handleChange = () => {
    dispatch({
      type: "/start/select",
      payload: {
        selectedAnswer: option,
      },
    });

    setErrorMessage(null);
  };

  const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.volume = 0.4;
    audio.play();
  };

  useEffect(() => {
    if (!fromLocal && selectedAnswer && hasAnswered && isCorrectAnswer) {
      playSound(correct);
    }
    if (!fromLocal && selectedAnswer && hasAnswered && !isCorrectAnswer) {
      playSound(wrong);
    }
  }, [selectedAnswer, hasAnswered, isCorrectAnswer,fromLocal]);



  return (
    <StyledQuestionOption>
      <input
        type="radio"
        name="option"
        onChange={handleChange}
        disabled={hasAnswered}
        checked={option === selectedAnswer}
      />
      <StyledQuestionRadio>
        {isSelected && !hasAnswered && (
          <StyledRadioCircle layout layoutId="option" />
        )}
        {isSelected && hasAnswered && isCorrectAnswer && (
          <img src=" /assets/images/icon-correct.svg" alt="correct answer" />
        )}

        {isSelected && hasAnswered && !isCorrectAnswer && (
          <img
            src=" /assets/images/icon-incorrect.svg"
            alt="incorrect answer"
          />
        )}
      </StyledQuestionRadio>
      <p>{option}</p>
    </StyledQuestionOption>
  );
}

QuizQuestion.Option = QuestionOption;

export default QuizQuestion;
