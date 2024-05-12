import { motion } from "framer-motion";
import styled from "styled-components";

const StyledQuizCompleted = styled(motion.div)`
  display: flex;
`;

function QuizCompeted() {
  return (
    <StyledQuizCompleted layout="position" layoutId="quiz">
      QuizCompeted
    </StyledQuizCompleted>
  );
}

export default QuizCompeted;
