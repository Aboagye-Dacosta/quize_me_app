import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import Row from "../../ui/Row";

import ModalSelectSubject from "./ModalSelectSubject";

import { useQuiz } from "../../context/QuizContext";
import {
  getSingleSubject,
  getSubjectQuestionsLen,
} from "../../services/dataApi";

const StyledQuizCompleted = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
`;

const StyledHeading = styled(Heading)`
  display: flex;
  background-clip: text;
  background: var(--bg-brand);
  text-align: center;

  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

const Image = styled.div`
  /* padding: 2rem; */
  border-radius: 100%;
  height: 8rem;
  width: 8rem;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey-800);
  box-shadow: var(--shadow-md);

  & img {
    width: 4rem;
    height: 4rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;

  font-size: 1.6rem;

  & p {
    display: flex; 
    flex-direction:column;
    align-items: center;
    gap: 0.7rem;

    @media screen and (min-width: 37.25em){
      flex-direction: row;
    }
  }

  & span {
    text-align: center;
  }

  & span:last-of-type {
    display: inline-block;
    font-weight: bold;

    background-color: var(--color-grey-800);
    color: var(--color-grey-0);
    padding: 1rem 2rem;
    border-radius: var(--border-radius-sm);
  }
`;

function QuizCompeted() {
  const { subject } = useParams();
  const navigate = useNavigate();
  const {
    quizState: { cumScore },
  } = useQuiz();

  const subjectObj = getSingleSubject(subject!);
  const questionsLen = getSubjectQuestionsLen(subject!);

  return (
    <StyledQuizCompleted layout="position" layoutId="quiz">
      <Image>
        {" "}
        <img src={subjectObj.icon} alt={`icon of ${subjectObj.title}`} />{" "}
      </Image>
      <StyledHeading>
        <p> Congratulation You've Completed Quiz on {subjectObj.title} </p>
      </StyledHeading>
      <Content>
        <p>
          {" "}
          <span>Number of questions answered correct</span>{" "}
          <span>
            {cumScore} / {questionsLen}{" "}
          </span>{" "}
        </p>
        <p>
          {" "}
         <span> Points award </span><span>{cumScore} </span>{" "}
        </p>
      </Content>

      <Row>
        <Modal>
          <Modal.Open opens="selectSubject">
            <Button>Take another quiz</Button>
          </Modal.Open>
          <Modal.Window name="selectSubject">
            <ModalSelectSubject />
          </Modal.Window>
        </Modal>
        <Button variation="secondary" onClick={() => navigate("/")}>
          {" "}
          End Session
        </Button>
      </Row>
    </StyledQuizCompleted>
  );
}

export default QuizCompeted;
