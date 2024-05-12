import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

import { useQuizQuestions } from "./useQuizQuestions";

import { useQuiz } from "../../context/QuizContext";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";
import Spinner from "../../ui/Spinner";
import { useLoadSubjects } from "../subjects/useLoadSubjects";

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
  const { quiz: { questions, icon, title } = {}, isLoadingQuiz } =
    useQuizQuestions();

  const { subjects, isLoadingSubjects } = useLoadSubjects();
  const { dispatch } = useQuiz();

  useEffect(() => {
    if (!isLoadingSubjects && subjects?.length > 0) {
      let hasSubject = false;

      subjects!.forEach((sub) => {
        if (sub.title.toLowerCase() === subject!.toLowerCase()) {
          hasSubject = true;
        }
      });

      if (!hasSubject) throw new Error("Please check the url link");
    }
  }, [isLoadingSubjects, subject, subjects]);

  return (
    <>
      {isLoadingQuiz ? (
        <Spinner />
      ) : (
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
              Number of questions <span>{questions?.length}</span>
            </p>
            <p>
              Alloted time for quiz <span>{50}min</span>{" "}
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
            <Button onClick={() => dispatch({ type: "/start" })}>
              Start Quiz{" "}
            </Button>
          </Row>
        </StyledQuizInitial>
      )}
    </>
  );
}

export default QuizInitial;
