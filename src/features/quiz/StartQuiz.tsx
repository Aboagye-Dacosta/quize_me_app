import { useParams } from "react-router-dom";
import styled from "styled-components";

import Heading from "../../ui/Heading";

const StyledStartQuiz = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

function StartQuiz() {
    const { subject } = useParams();
    
  return (
    <StyledStartQuiz>
      <Heading>{subject!.toUpperCase()} QUIZ</Heading>
    </StyledStartQuiz>
  );
}

export default StartQuiz;
