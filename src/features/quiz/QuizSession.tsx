import { motion } from "framer-motion";
import styled from "styled-components";
import { useQuiz } from "../../context/QuizContext";
import Button from "../../ui/Button";

const StyledQuizSession = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
`;

function QuizSession() {
const {dispatch} = useQuiz()
  return (
    <StyledQuizSession layout="position" layoutId="quiz">
      QuizSession
      <Button onClick={() => dispatch({type: "/complete"})}>Complete </Button>
    </StyledQuizSession>
  );
}

export default QuizSession;
