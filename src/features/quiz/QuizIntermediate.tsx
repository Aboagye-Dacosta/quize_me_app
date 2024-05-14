import { useEffect, useState } from "react";
import styled from "styled-components";

import { useQuiz } from "../../context/QuizContext";

const StyledQuizIntermediate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTimeDisplay = styled.div`
  padding: 3rem;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
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
      <StyledTimeDisplay>{time}</StyledTimeDisplay>
    </StyledQuizIntermediate>
  );
}

export default QuizIntermediate;
