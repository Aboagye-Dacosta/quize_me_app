import { useEffect, useState } from "react";
import styled from "styled-components";

import { useQuiz } from "../../context/QuizContext";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";

const StyledQuizIntermediate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.7rem;
  padding: 0 2rem;
`;

const StyledTimeDisplay = styled.div`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`;

const StyledHeading = styled(Heading)`
  font-weight: bold;
  font-size: 1.8rem;
  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

function QuizIntermediate() {
  const { dispatch } = useQuiz();
  const [time, setTime] = useState<number>(5);

  useEffect(() => {
    let interval: number | undefined = undefined;
    if (time !== 0) {
      interval = setInterval(() => {
        setTime((state) => state - 1);
      }, 1000);
    }

    if (time == 0) {
      dispatch({
        type: "/start",
      });
    }

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <StyledQuizIntermediate>
      <StyledHeading as="h6">Quiz Starts In </StyledHeading>
      <StyledTimeDisplay>{time}</StyledTimeDisplay>
      <Button onClick={() => dispatch({ type: "/start" })}>Skip</Button>
    </StyledQuizIntermediate>
  );
}

export default QuizIntermediate;
