import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { useQuiz } from "../../context/QuizContext";

const StyledModalSubjectCard = styled.button`
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.5rem 2rem;
  width: 100%;
  border: none;

  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-sm);
  background: var(--bg-brand);
  color: #fff;
  cursor: pointer;
  user-select: none;
  transition: transform 200ms ease-in-out;

  & p {
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 1.2px;
  }

  &:hover {
    transform: translateX(-10px);
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;

  background-color: #040404;
  border-radius: var(--border-radius-sm);
`;

function ModalSubjectCard({
  iconUrl,
  subject,
  closeModal,
}: {
  iconUrl: string;
  subject: string;
  closeModal?: () => void;
}) {
  const navigate = useNavigate();
  const { dispatch } = useQuiz();

  const handleClick = () => {
    navigate(`/${subject.toLowerCase()}`);
    dispatch({ type: "/initial" });
    if (closeModal !== undefined) {
      closeModal();
    }
  };

  return (
    <StyledModalSubjectCard onClick={handleClick}>
      <StyledLogo>
        <img src={iconUrl} alt={subject} />
      </StyledLogo>
      <p>{subject} </p>
    </StyledModalSubjectCard>
  );
}

export default ModalSubjectCard;
