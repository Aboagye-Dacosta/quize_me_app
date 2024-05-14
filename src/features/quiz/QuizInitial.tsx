import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuiz } from "../../context/QuizContext";
import {
  getSingleSubject,
  getSubjectQuestionsLen,
} from "../../services/dataApi";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";

import QuizIntermediate from "./QuizIntermediate";

const StyledQuizInitial = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;

  gap: 1.3rem;

  & p {
    text-align: center;

    &:has(span) {
      span {
        font-weight: bold;
      }
    }
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 4rem;
  letter-spacing: 1.2px;

  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

const StyledIcon = styled.div`
  padding: 2rem;
  border-radius: 100%;
  height: 10rem;
  width: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-800);
  box-shadow: var(--shadow-md);
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.7rem;
`;

const TimeCard = styled.div`
  padding: 2rem;
  box-shadow: var(--shadow-md);

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;

function QuizInitial() {
  const navigate = useNavigate();
  const { subject } = useParams();
  const questionLen = getSubjectQuestionsLen(subject!);
  const { title, icon } = getSingleSubject(subject!);

 

  return (
    <StyledQuizInitial layout="position" layoutId="quiz">
      <StyledHeader>
        <StyledIcon>
          <img src={icon} alt={subject} />
        </StyledIcon>
        <StyledHeading>{title?.toUpperCase()} QUIZ</StyledHeading>
      </StyledHeader>
      <p>Do you you want to continue with the quiz</p>
      <p>
        <span>Note</span> , once the quiz begins you wont be able to change.{" "}
        <br /> A question can only be attempted once.{" "}
      </p>

      <TimeCard>
        <p>
          Number of questions <span>{questionLen}</span>
        </p>
        <p>
          Alloted time for quiz <span>{questionLen * 2}min</span>{" "}
        </p>
      </TimeCard>

      <Row type="horizontal">
        <Button
          variation="secondary"
          onClick={() => {
            navigate("/");
          }}
        >
          Back{" "}
        </Button>
        <Modal>
          <Modal.Open opens="intermediate">
            <Button>Start Quiz </Button>
          </Modal.Open>
          <Modal.Window name="intermediate">
            <QuizIntermediate />
          </Modal.Window>
        </Modal>
      </Row>
    </StyledQuizInitial>
  );
}

export default QuizInitial;
