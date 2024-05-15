import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

const StyledQuitQuizModal = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 1rem;
`      

const StyledHeading = styled(Heading)`
  background: var(--bg-brand);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: cover;
  background-position: center;
`;

function QuitQuizModal({ closeModal }: { closeModal?: () => void }) {
  const navigate = useNavigate();
  const handleQuitQuiz = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <StyledQuitQuizModal>
      <StyledHeading>Do you want to quit quiz </StyledHeading>
      <Row type="horizontal">
        <Button variation="secondary" onClick={handleQuitQuiz}>
          Quit quiz
        </Button>
        <Button
          onClick={() => {
            if (closeModal !== undefined) {
              closeModal();
            }
          }}
        >
          Continue quiz
        </Button>
      </Row>
    </StyledQuitQuizModal>
  );
}

export default QuitQuizModal;
