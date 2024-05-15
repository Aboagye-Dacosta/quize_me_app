import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import Heading from "../../ui/Heading";
import Modal from "../../ui/Modal";
import QuitQuizModal from "./QuitQuizModal";

const StyledLogo = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1.5rem;

  background-color: transparent;
  border: none;
`;

const StyledHeading = styled(Heading)`
  font-size: 2rem;
  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 37.5em) {
    font-size: 4rem;
  }
`;

function AppLogo() {
  const location = useLocation();
 
  return (
    <>
      {location.pathname === "/" ? (
        <StyledLogo as={Link} to="/">
          <img src="/assets/images/favicon.png" alt="logo" />
          <StyledHeading as="h1"> QUIZ-me</StyledHeading>
        </StyledLogo>
      ) : (
        <Modal>
          <Modal.Open opens="quitQuiz">
            <StyledLogo>
              <img src="/assets/images/favicon.png" alt="logo" />
              <StyledHeading as="h1"> QUIZ-me</StyledHeading>
            </StyledLogo>
          </Modal.Open>
          <Modal.Window name="quitQuiz">
            <QuitQuizModal />
          </Modal.Window>
        </Modal>
      )}
    </>
  );
}

export default AppLogo;
